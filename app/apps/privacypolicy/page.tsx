/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="w-full flex flex-col text-black">
      <section className="py-24 pt-32">
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>

          <p className="text-xl mb-8">
            This Privacy Policy is provided on behalf of the mobile application
            developed by Bereej Technologies Private Limited, hereinafter
            referred to as "we," "us," or "our." This policy outlines how we
            collect, use, and share user data in connection with the use of our
            mobile application available on the Google Play Store.
          </p>

          <p className="text-xl mb-8">
            This privacy policy is an electronic record in the form of an
            electronic contract formed under the Information Technology Act,
            2000 and the rules made thereunder and the amended provisions
            pertaining to electronic documents/records in various statutes as
            amended by the Information Technology Act, 2000. This privacy policy
            does not require any physical, electronic or digital signature.
          </p>

          <p className="text-xl mb-8">
            This privacy policy is a legally binding document between you and
            the company (both terms defined below). The terms of this privacy
            policy will be effective upon your acceptance of the same (directly
            or indirectly in electronic form, by clicking on the I accept tab or
            by use of the website or by other means) and will govern the
            relationship between you and the company for your use of the website
            "website" (defined below).
          </p>

          <p className="text-xl mb-8">
            This document is published and shall be construed in accordance with
            the provisions of the Information Technology (reasonable security
            practices and procedures and sensitive personal data of information)
            Rules, 2011 under the Information Technology Act, 2000; that require
            publishing of the privacy policy for the collection, use, storage
            and transfer of sensitive personal data or information.
          </p>

          <p className="text-xl mb-8">
            Please read this privacy policy carefully. By using the website, you
            indicate that you understand, agree and consent to this privacy
            policy. If you do not agree with the terms of this privacy policy,
            please do not use this website. By providing us your information or
            by making use of the facilities provided by the website, you hereby
            consent to the collection, storage, processing and transfer of any
            or all of your personal information and non-personal information by
            us as specified under this privacy policy. You further agree that
            such collection, use, storage and transfer of your information shall
            not cause any loss or wrongful gain to you or any other person. We
            are committed to protecting the privacy of our users. This privacy
            policy is designed to help you understand how your personal
            information is collected, used, and shared when you use our app.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Data collection and usage:
          </h2>

          <p className="text-xl mb-4">
            While using Our Application, in order to provide features of Our
            Application, We may collect, with Your prior permission:
          </p>

          <p className="text-xl mb-4">
            Pictures and other information from your Device's camera and photo
            library
          </p>

          <p className="text-xl mb-8">
            We use this information to provide features of Our Service, to
            improve and customize Our Service. The information may be uploaded
            to the Company's servers and/or a Service Provider's server or it
            may be simply stored on Your device.
          </p>

          <p className="text-xl mb-8">
            You can enable or disable access to this information at any time,
            through Your Device settings.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Security:</h3>
              <p className="text-xl">
                We implement industry-standard security measures to protect the
                data collected from unauthorized access, disclosure, alteration,
                and destruction.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Data retention:</h3>
              <p className="text-xl">
                We retain user data only for as long as necessary to provide the
                services outlined in this privacy policy. Users have the right
                to request the deletion of their data from our servers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Your consent:</h3>
              <p className="text-xl">
                By using the app, you consent to the terms outlined in this
                privacy policy.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">
                Updates to privacy policy:
              </h3>
              <p className="text-xl">
                We reserve the right to update this privacy policy from time to
                time. Any changes will be effective upon posting the revised
                policy. We will notify users of significant changes via the app
                or other means.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Accessibility:</h3>
              <p className="text-xl">
                This privacy policy is accessible through a standard web browser
                without the need for plugins or special handlers. It is
                available on our website, which is publicly accessible and not
                geofenced. By using the app, you agree to the terms outlined in
                this privacy policy. It is important that you read and
                understand this policy.
              </p>
            </div>
          </div>
          <Link
            href="https://webflow.com/?utm_campaign=3Dbrandjs"
            className="bg-white w-auto shadow-2xl border fixed bottom-5 right-5 p-1.5 flex flex-row gap-2"
          >
            <img
              src="https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              alt="3D"
              style={{ marginRight: "4px", width: "26px" }}
            />
            <img
              src="https:/d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              alt="3D Made in Webflow"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
