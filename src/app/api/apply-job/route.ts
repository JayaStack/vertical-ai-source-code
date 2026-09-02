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

    // 4. Prepare candidate confirmation HTML email
    const candidateHtmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff; color: #1e293b;">
        <div style="background-color: #0f172a; padding: 28px 24px; text-align: center;">
          <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.02em;">The Vertical AI</h1>
          <p style="margin: 6px 0 0 0; font-size: 13px; color: #94a3b8;">Careers &amp; Talent Team</p>
        </div>

        <div style="padding: 28px 24px;">
          <h2 style="margin: 0 0 16px 0; font-size: 18px; color: #0f172a; font-weight: 600;">
            Thank you for applying, ${fullName}!
          </h2>
          <p style="margin: 0 0 16px 0; font-size: 14px; line-height: 1.6; color: #334155;">
            We have successfully received your application for the <strong>${jobTitle}</strong> position. Our team appreciates your interest in building the future of enterprise AI with us.
          </p>

          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin: 20px 0;">
            <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.05em;">Application Summary</p>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 6px 0; color: #64748b; width: 35%;"><strong>Position:</strong></td>
                <td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${jobTitle}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748b;"><strong>Location:</strong></td>
                <td style="padding: 6px 0; color: #0f172a;">${jobLocation}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748b;"><strong>Status:</strong></td>
                <td style="padding: 6px 0; color: #16a34a; font-weight: 600;">Application Received (Under Review)</td>
              </tr>
            </table>
          </div>

          <div style="margin: 24px 0 20px 0;">
            <h3 style="margin: 0 0 10px 0; font-size: 15px; color: #0f172a; font-weight: 600;">What happens next?</h3>
            <ol style="margin: 0; padding-left: 20px; font-size: 14px; line-height: 1.6; color: #475569;">
              <li style="margin-bottom: 8px;"><strong>Review:</strong> Our hiring team will carefully review your profile and experience against the role requirements.</li>
              <li style="margin-bottom: 8px;"><strong>Next Steps:</strong> If your qualifications match our current hiring needs, we will reach out directly to schedule an introductory conversation.</li>
              <li style="margin-bottom: 0;"><strong>Updates:</strong> You will be notified as your application moves forward in the hiring process.</li>
            </ol>
          </div>

          <hr style="border: none; border-top: 1px solid #f1f5f9; margin: 24px 0;" />

          <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #334155;">
            Warm regards,<br />
            <strong>The Vertical AI Talent Team</strong><br />
            <a href="https://thevertical.ai" style="color: #2563eb; text-decoration: none; font-weight: 500;">thevertical.ai</a>
          </p>
        </div>

        <div style="background-color: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
          This is an automated confirmation from The Vertical AI Careers Portal.
        </div>
      </div>
    `;

    // 5. Dispatch both internal notification and candidate confirmation emails concurrently
    const emailPromises: Promise<any>[] = [
      transporter.sendMail({
        from: `"The Vertical AI Careers" <${SMTP_USER}>`,
        to: RECIPIENT_EMAIL,
        replyTo: email && email !== "Not provided" ? email : undefined,
        subject: `[Job Application] ${jobTitle} - ${fullName}`,
        html: htmlContent,
        attachments,
      }),
    ];

    // Send confirmation to candidate if valid email provided
    const isValidCandidateEmail =
      email &&
      email !== "Not provided" &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    if (isValidCandidateEmail) {
      emailPromises.push(
        transporter.sendMail({
          from: `"The Vertical AI Careers" <${SMTP_USER}>`,
          to: email.trim(),
          subject: `Application Received: ${jobTitle} at The Vertical AI`,
          html: candidateHtmlContent,
        })
      );
    }

    await Promise.all(emailPromises);

    return NextResponse.json({
      success: true,
      message: "Application submitted and emails sent successfully",
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
