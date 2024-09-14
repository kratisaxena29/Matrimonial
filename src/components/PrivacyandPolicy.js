import React, { useEffect, useRef, useState } from "react";
import "../styles/home.css";
import "../styles/animate.css";
import "../styles/bootstrap.css";
import "../styles/fontAwesome.css";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Email, Facebook, Instagram, Twitter } from "@mui/icons-material";

function PrivacyandPolicy() {
    const navRef = useRef(null);

    const handleTermsCondition = () => {

        navigate('/terms&conditions')
    }

    const navigate = useNavigate();
    useEffect(() => {
        if (navRef.current) {
            navRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
    }, []);
    return (
        <div>
            <div>
                <nav
                    ref={navRef}
                    style={{
                        backgroundColor: "#6D0B32",
                        padding: "10px 20px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        //   top:0,
                        //   position:"fixed"
                    }}
                >
                    <a
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/")}
                        className="logo-brand"
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ height: "60px", marginRight: "40px" }}
                        />
                    </a>
                    <button onClick={() => navigate("/login")} class="custom-button">
                        Login
                    </button>
                </nav>
            </div>
            <div
                style={{
                    paddingTop: "100px",
                    padding: "20px",
                    backgroundColor: "#FFF",
                }}
            >
                <h1 style={{ color: "#6D0B32" }}>Privacy Policy of SoulMatch</h1>
                <p>
                    PLEASE READ THESE PRIVACY POLICY CAREFULLY .
                </p>
                <p style={{ color: "#333", fontSize: "14px" }}>
                    SoulMatch.co.in is an online matrimonial portal endeavouring constantly to provide you with matrimonial services. This privacy statement is common to all the matrimonial Websites operated under SoulMatch.co.in. Since we are strongly committed to your right to privacy, we have drawn out a privacy statement with regard to the information we collect from you. You acknowledge that you are disclosing information voluntarily. By accessing /using the website and/or by providing your information, you consent to the collection, use, share, store and process the info you disclose on the website in accordance with this Privacy Policy. If you do not agree for use of your information, please do not use or access this website.
                </p>
                <p>
                    Information Required for the Website
                </p>
                <p style={{ color: "#333", fontSize: "14px" }}>
                    The information we gather from members and visitors who apply for the various services our Website offers includes, but may not be limited to, photo of the user, your profile videos you wish to upload, email address, name, date of birth, educational qualifications, based on your explicitly consent identify proof documents which you voluntarily submit for verification purpose, a user-specified password, mailing address, zip/pin code and telephone/mobile number or fax number.
                </p>
                <p style={{ color: "#333", fontSize: "14px" }}>
                    We use a secure server for credit card transactions to protect the credit card information of our users and Cookies are used to store the login information. Cookies are small files placed on your hard drive that will assist us in providing our services. You may also encounter Cookies or identical/related devices on certain pages of the website that are placed by third parties. We do not control the use of cookies by third parties.
                </p>
                <p style={{ color: "#333", fontSize: "14px" }}>
                    If you establish a credit account with us to pay the fees we charge, some additional information, including a billing address, a credit/debit card number and a credit/debit card expiration date.
                </p>
                <p style={{ color: "#333", fontSize: "14px" }}>
                    The user information we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use. The User Information is used for authentication and account access, If a user registers using social networking platforms such as Facebook, Google, LinkedIn and others we may collect personal data you choose to allow us to access through their APIs. When the user accesses our websites, data relating to device ID, log files ,Geographic Location, device Information/specification are also collected automatically.
                </p>
                <p style={{ color: "#333", fontSize: "14px" }}>
                    We may use also your personal information for verification, analysis of data, usage trends and to evaluate and improve our site, marketing research , preventing of frauds. In our efforts to continually improve our product and service offerings, we collect and analyse demographic and profile data about our users' activity on our website. We identify and use your IP address to help diagnose problems with our server, and to administer our website/apps. Your IP address is also used to help identify you and to gather broad demographic information.
                </p>
                <p>
                    How the website uses the information it collects ?
                </p>
                <p style={{ color: "#333", fontSize: "14px" }}>
                    SoulMatch.co.in collects information for data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our websites or apps, products, and services ,marketing research from our users primarily to ensure that we are able to fulfil your requirements and to deliver Personalised experience.
                </p>
                <p>
                    For European Union Members (EU)
                </p>
                <p style={{ color: "#333", fontSize: "14px" }}>
                    If you are located in the EU, you will be asked to provide consent to the collection, processing, and sharing of your personal information. Personal information means any information related to an identified or identifiable natural person. You have the right to share and access your personal information and right to withdraw consent for sharing your personal information at any point of time and right to erase your personal information subject to applicable laws. for sharing your personal information at any point of time. You can withdraw your consent provided by contacting us. Your personal information may be stored in databases located outside of the EU including in India. Where we transfer personal data outside of EU, we either transfer personal information to countries that provide an adequate level of protection or we have appropriate safeguards in place. We may require proof of or need to verify your identity before we can give effect to these rights. To request to review, update, or delete your personal information, please submit a request form by sending an email to contactus@soulmatch.co.in.
                </p>
                <p style={{ color: "#333", fontSize: "14px" }}>
                    We may share your information with third parties who are an anti-fraud solution provider(s) located in UK. They help us to ensure we keep you safe from scammers and fraudster.
                </p>
                <p>
                    With whom the website shares the information it collects?
                </p>
                <p style={{ color: "#333", fontSize: "14px" }}>
                    We may share such identifiable information with our associates/affiliates/subsidiaries and such associates/affiliates/subsidiaries may market to you as a result of such sharing. Any information you give us is held with the utmost care and security. We are also bound to cooperate fully should a situation arise where we are required by law or legal process to provide information about a customer/visitor.
                </p>
                <p style={{ color: "#333", fontSize: "14px" }}>
                    Where required or permitted by law, information may be provided to others, such as regulators and law enforcement agencies or to protect the rights, property or personal safety of other members or the general public. We may voluntarily share your information with law enforcement agencies / Gateway service providers / anti-fraud solution provider(s) if we feel that the transaction is of suspicious nature.
                </p>
                <p style={{ color: "#333", fontSize: "14px" }}>
                    From time to time, we may consider corporate transactions such as a merger, acquisition, reorganization, asset sale, or similar. In these instances, we may transfer or allow access to information to enable the assessment and undertaking of that transaction. If we buy or sell any business or assets, personal information may be transferred to third parties involved in the transaction.
                </p>
                <p style={{ color: "#333", fontSize: "14px" }}>
                    Our website links to other website/apps that may collect personally identifiable information about you. We are not responsible for the privacy policy or the contents of those linked website/apps.
                </p>
                <p>
                    How Long Do We Keep Your Information?
                </p>
                <p style={{ color: "#333", fontSize: "14px" }}>
                    As stipulated in the Privacy Policy we will retain the information we collect from users under the following circumstances:
                </p>

                <p style={{ color: "#333", fontSize: "14px" }}>
                    For as long as the users subscribe to our services to meet their suitable purpose(s) for which it was collected, for the sake of enforcing agreements, for performing audits, for resolving any form of disputes, for establishing legal defences, for pursuing legitimate businesses and to comply with the relevant applicable laws.
                </p>
                <p>
                    What are the Security Precautions in respect of your personal information?
                </p>
                <p style={{ color: "#333", fontSize: "14px" }}>
                    We aim to protect your personal information through a system of organizational and technical security measures. We have implemented appropriate internal control measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Once your information is in our possession, we adhere to security guidelines protecting it against unauthorised access.
                </p>
                <p>
                    Change of Privacy Policy
                </p>
                <p style={{ color: "#333", fontSize: "14px" }}>
                    We may change this Privacy Policy from time to time without any notice to you. However, changes will be updated in the Privacy Policy page.
                </p>
                <p>
                    How to address your Grievance :
                </p>
                <p>
                    Email: support@soulmatch.co.in
                </p>
                <p style={{ color: "#333", fontSize: "14px" }}>
                    We will address your Grievance between 10 am to 6 pm IST from Monday to Friday  excluding Satuday’s & Sunday's and Public Holidays in India.
                </p>
                <p style={{ color: "#333", fontSize: "14px" }}>
                    The Grievance officer is appointed as per Section 5 (9) of the Information Technology ( Reasonable Security & Procedures and Sensitive Personal data or Information ) Rule, 2011.
                </p>

 
            </div>

            <section>
                <div className="cr">
                    <div className="container">
                        <div className="footer-content">
                            <p
                                onClick={handleTermsCondition}
                                style={{
                                    textAlign: "center",
                                    fontSize: "15px",
                                    cursor: "pointer",
                                }}
                            >
                                Copyright © <span id="cry">2024</span>{" "}
                                <a
                                    style={{
                                        textDecoration: "none",
                                        color: "#FFBF00",
                                    }}
                                    // href="#!"
                                    target="_blank"
                                >
                                    SoulMatch
                                </a>{" "}
                                All rights reserved. | Terms and Conditions
                            </p>
                            <p style={{ fontSize: "20px" }}>
                                <strong>Contact Us: </strong>
                                <a
                                    href="mailto:soulmatchinfo@gmail.com"
                                    style={{
                                        textDecoration: "none",
                                        color: "#FFBF0E",
                                    }}
                                >
                                    soulmatchinfo@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PrivacyandPolicy;
