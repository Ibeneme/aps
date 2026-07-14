import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Inquiry from '@/lib/models/Inquiry';
import nodemailer from 'nodemailer';

/**
 * Configure Nodemailer with Zoho SMTP
 */
const ZOHO_EMAIL_ADMIN = 'ariad@ariadpsychservices.com';

const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_APP_PASSWORD?.replace(/\s/g, ''),
    },
});

/**
 * Styling constants
 */
const emailWrapperStyle = `
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.7;
  color: #334155;
  max-width: 600px;
  margin: 40px auto;
  padding: 40px;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  background-color: #FAF8F5;
`;

const headerStyle = "color: #023B37; font-weight: 800; font-size: 28px; margin-bottom: 24px; letter-spacing: -0.02em;";
const accentStyle = "color: #067F76; font-weight: 600;";

export async function GET() {
    try {
        await connectDB();
        const inquiries = await Inquiry.find({}).sort({ created_at: -1 }).lean();
        return NextResponse.json(inquiries);
    } catch (error) {
        console.error("Error fetching inquiries:", error);
        return NextResponse.json({ error: "Failed to fetch inquiries" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();

        // 1. Save to Database
        const newInquiry = await Inquiry.create({
            name: body.name,
            email: body.email,
            phone: body.phone,
            location: body.location,
            message: body.message,
        });

        // 2. Send Notifications via Zoho SMTP
        try {
            const clientEmailHtml = `
              <div style="${emailWrapperStyle}">
                <h1 style="${headerStyle}">Thank you, ${body.name}!</h1>
                
                <p>Thank you for reaching out to <strong>Ariad Psychological Services</strong>. We have received your inquiry for our <strong>${body.location}</strong> location.</p>
                
                <p>At Ariad Psychological Services, we believe that understanding and support provide a steady foundation for navigating life's challenges. Our goal is to offer compassionate, evidence-based assessment that helps you gain clarity, confidence, and direction.</p>
                
                <p>A member of our team will review your inquiry and contact you shortly to discuss your needs and how we can best support you on your path to <span style="${accentStyle}">clinical clarity</span>.</p>
                
                <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 13px; color: #64748b;">
                  <p>Confidentiality is our priority. If you need to update your inquiry, please feel free to reply to this email.</p>
                </div>
              </div>
            `;

            // Email to Client
            await transporter.sendMail({
                from: `Ariad Psychological Services <${process.env.ZOHO_EMAIL}>`,
                to: body.email,
                bcc: 'ariad@ariadpsychservices.com',
                subject: 'We have received your inquiry - Ariad Psychological Services',
                html: clientEmailHtml,
            });

            // Email to Admin
            await transporter.sendMail({
                from: `Inquiry System <${process.env.ZOHO_EMAIL}>`,
                to: [ZOHO_EMAIL_ADMIN, 'ariad@ariadpsychservices.com'],
                subject: `New Inquiry: ${body.name} (${body.location})`,
                html: `
                  <div style="${emailWrapperStyle}">
                    <h2 style="${headerStyle}">New Inquiry Received</h2>
                    <p><strong>Name:</strong> ${body.name}</p>
                    <p><strong>Email:</strong> ${body.email}</p>
                    <p><strong>Phone:</strong> ${body.phone || 'Not provided'}</p>
                    <p><strong>Location:</strong> ${body.location}</p>
                    <p><strong>Message:</strong></p>
                    <blockquote style="background: #f1f5f9; padding: 15px; border-left: 4px solid #067F76; border-radius: 6px; margin: 10px 0;">
                      ${body.message || 'No additional message provided.'}
                    </blockquote>
                  </div>
                `,
            });
        } catch (emailError) {
            console.error("Email service error:", emailError);
        }

        return NextResponse.json({
            success: true,
            message: "Inquiry submitted successfully",
            data: newInquiry
        }, { status: 201 });

    } catch (error: any) {
        console.error("Error creating inquiry:", error);
        return NextResponse.json({
            error: "Failed to submit inquiry",
            details: error.message
        }, { status: 500 });
    }
}