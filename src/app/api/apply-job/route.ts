import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = process.env.SMTP_EMAIL || "harishraghavender2@gmail.com";
const SMTP_USER = process.env.SMTP_EMAIL || "harishraghavender2@gmail.com";
// Strip spaces from Google App Password if pasted with spaces
const SMTP_PASS = (process.env.SMTP_PASSWORD || "").replace(/\s+/g, "");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const jobTitle = (formData.get("jobTitle") as string) || "Position";
    const jobCategory = (formData.get("jobCategory") as string) || "General";
    const jobLocation = (formData.get("jobLocation") as string) || "Not specified";
    const fullName = (formData.get("fullName") as string) || "Not provided";
    const email = (formData.get("email") as string) || "Not provided";
    const phone = (formData.get("phone") as string) || "Not provided";
    const linkedin = (formData.get("linkedin") as string) || "Not provided";
    const currentLocation = (formData.get("currentLocation") as string) || "Not specified";
    const totalExperience = (formData.get("totalExperience") as string) || "Not specified";
    const noticePeriod = (formData.get("noticePeriod") as string) || "Not specified";
    const expectedCtc = (formData.get("expectedCtc") as string) || "Not specified";
    const source = (formData.get("source") as string) || "Not specified";
    const coverLetter = (formData.get("coverLetter") as string) || "Not provided";

    const resumeFile = formData.get("resume") as File | null;

    let resumeBuffer: Buffer | null = null;
    let resumeFilename = "No resume attached";

    // 1. Process resume file buffer if uploaded
    if (resumeFile && typeof resumeFile.arrayBuffer === "function") {
      const bytes = await resumeFile.arrayBuffer();
      resumeBuffer = Buffer.from(bytes);
      resumeFilename = resumeFile.name;
    }

    // 2. Prepare HTML Email Content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #0f172a; padding: 24px; color: #ffffff; text-align: center;">
          <h2 style="margin: 0; font-size: 22px; font-weight: bold;">New Job Application</h2>
          <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.85;">${jobTitle} (${jobCategory})</p>
        </div>

        <div style="padding: 24px;">
          <h3 style="margin: 0 0 12px 0; font-size: 16px; color: #0f172a; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">Candidate Details</h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; width: 38%;"><strong>Full Name:</strong></td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${fullName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b;"><strong>Email Address:</strong></td>
              <td style="padding: 10px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b;"><strong>Phone Number:</strong></td>
              <td style="padding: 10px 0; color: #0f172a;"><a href="tel:${phone}" style="color: #0f172a; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b;"><strong>LinkedIn Profile:</strong></td>
              <td style="padding: 10px 0; color: #0f172a;">
                ${linkedin !== "Not provided" && linkedin.startsWith("http") ? `<a href="${linkedin}" target="_blank" style="color: #2563eb; text-decoration: underline;">View Profile</a>` : linkedin}
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b;"><strong>Current Location:</strong></td>
              <td style="padding: 10px 0; color: #0f172a;">${currentLocation}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b;"><strong>Total Experience:</strong></td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${totalExperience}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b;"><strong>Notice Period:</strong></td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${noticePeriod}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b;"><strong>Expected CTC / Budget:</strong></td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 600; color: #059669;">${expectedCtc}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b;"><strong>Referral Source:</strong></td>
              <td style="padding: 10px 0; color: #0f172a;">${source}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b;"><strong>Role & Location:</strong></td>
              <td style="padding: 10px 0; color: #0f172a;">${jobTitle} (${jobLocation})</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b;"><strong>Attached Resume:</strong></td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">📎 ${resumeFilename} (Attached below)</td>
            </tr>
          </table>

          <div style="margin-top: 20px;">
            <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #64748b;">Brief Note / Why You're a Fit:</h4>
            <div style="background-color: #f8fafc; padding: 14px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 14px; color: #334155; line-height: 1.5; white-space: pre-wrap;">
              ${coverLetter}
            </div>
          </div>
        </div>

        <div style="background-color: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
          Received from The Vertical AI Careers Portal
        </div>
      </div>
    `;

    // 3. Prepare attachments array
    const attachments = [];
    if (resumeBuffer && resumeFile) {
      attachments.push({
        filename: resumeFile.name,
        content: resumeBuffer,
        contentType: resumeFile.type || "application/pdf",
      });
    }

    // 4. Send email via Nodemailer
    await transporter.sendMail({
      from: `"The Vertical AI Careers" <${SMTP_USER}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email !== "Not provided" ? email : undefined,
      subject: `[Job Application] ${jobTitle} - ${fullName}`,
      html: htmlContent,
      attachments,
    });

    return NextResponse.json({
      success: true,
      message: "Application submitted and email sent successfully",
    });
  } catch (error: any) {
    console.error("Error processing application:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to process application",
      },
      { status: 500 }
    );
  }
}
