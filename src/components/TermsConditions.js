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

function TermsConditions() {
    const navRef = useRef(null);

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
        <h1 style={{ color: "#6D0B32" }}>TERMS AND CONDITIONS</h1>
        <p style={{ color: "#333", fontSize: "14px" }}>
          Date: Friday(2024-06-21), Time: 08:57 PM
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          This document is an electronic record in terms of the Information
          Technology Act, 2000 and rules there under pertaining to electronic
          records as applicable and amended. This electronic record is generated
          by a computer system and does not require any physical or digital
          signatures.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          This document is published in accordance with the provisions of Rule 3
          (1) of the Information Technology (Intermediaries Guidelines and
          Digital Media Ethics Code) Rules, 2021 that require publishing the
          rules and regulations, privacy policy and the terms and conditions for
          access or usage of www.soulmatch.com (the "Website").
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          PLEASE READ THE FOLLOWING TERMS AND CONDITIONS VERY CAREFULLY BEFORE
          USING THE WEBSITE. ACCESSING, BROWSING OR OTHERWISE USING THE WEBSITE
          IMPLIES YOUR AGREEMENT TO BE BOUND BY ALL THESE TERMS AND CONDITIONS
          ("Agreement"). If you do not want to be bound by the Terms and
          Conditions, you must not use the Website or the SM(Soul Match)
          Services. The Terms and Conditions also includes the applicable
          policies which are incorporated herein by way of reference and as
          amended from time to time (the "Terms and conditions").
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          In these Terms, references to "SM member" shall mean the end user
          accessing the Website/SM services, its contents or using the SM
          Services offered. SM member also includes persons such as father,
          mother, brother, sister, relative or a friend ("Registrant") of the
          prospective bride/ bridegroom. The terms "You" and "User" shall be
          interchangeably used for "SM member". "SM Services" means a collective
          reference to the Soul Match service provided by Matrimony.com Limited
          ,CIN : L63090TN2001PLC047432,a company under the provisions of
          companies act, 2013 and having its registered office at No.94, TVH
          Beliciaa Towers, Tower - 2, 5th Floor, MRC Nagar, Chennai, Tamil Nadu
          – 600 028("MCL/Company").
        </p>
        <h2 style={{ color: "#6D0B32" }}>Scope</h2>
        <p style={{ color: "#333", fontSize: "14px" }}>
          You understand and acknowledge that Soul Match (SM) acts as an
          "Intermediary" as defined under clause (1) sub-clause (w) of Section 2
          of the Information Technology Act, 2000. SM is a brand owned by
          Matrimony.Com Limited (MCL) which owns, retains and has complete
          rights in SM and the SM Website /App/ SM Service.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          SM acts as a platform to enable any user to themselves register in it
          (by filling the mandatory fields and optional fields, if any) to
          voluntarily search for profile(s) from the database of SM’s already
          registered users, for seeking prospective lawful matrimonial alliances
          for themselves. SM retail store may also be able to assist you to
          create your profile, however, you must have a valid/operational mobile
          phone number and an email id. The profiles in the database of SM are
          classified broadly on the basis of sub-caste and region for the ease
          and convenience of its member / customer. SM Members are provided with
          free/paid access for searching profiles from the database of SM, as
          per the partner preference set by you on the Website/Applications
          -(App) and you can shortlist the profiles in which you are interested.
        </p>

        {/* Eligibility Section */}
        <h2 style={{ color: "#6D0B32" }}>Eligibility</h2>
        <p style={{ color: "#333", fontSize: "14px" }}>
          A) SMMembership and rights of admission is reserved solely for:
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          I. Indian Nationals & Citizens.
          <br />
          II. Persons of Indian Origin (PIO).
          <br />
          III. Non Resident Indians (NRI).
          <br />
          IV. Persons of Indian Descent or Indian Heritage
          <br />
          V. Persons who intend to marry persons of Indian Origin.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          B) Further in capacity as SM member you confirm that you are:
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          I. 18 years or above (if you are a woman) or 21 years or above (if you
          are a man);
          <br />
          II. If you have applied for Divorce, you may register on our
          website/App by stating "Awaiting Divorce".
          <br />
          III. If you are a resident of any other Country, you are legally
          competent to marry as per the local rules applicable to your country
          and you shall comply with the Indian laws for marrying a person of
          Indian Origin.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          C) In case you are a Registrant of the prospective bride/ bridegroom
          and has created profile in SM Website/App on behalf of them or is
          accessing the SM Website/App on behalf of them implies that you have
          taken their consent for their profile creation in SM and for accessing
          the SM Website/App.
        </p>

        {/* Registration Section */}
        <h2 style={{ color: "#6D0B32" }}>Registration</h2>
        <p style={{ color: "#333", fontSize: "14px" }}>
          A. We expect that you would complete the online registration process
          with fairness and honesty in furnishing true, accurate, current,
          complete information and with providing recent photos of you which
          will help you to meet your parameters. We expect you to read the
          relevant column before keying in the details or selecting the option
          available or uploading the photo. You are requested not to key in
          details of the profile in field other than the applicable field
          (including mentioning id's of other platforms/websites/App or
          repeating your details in another fields, after filling them once in
          the relevant fields or others photographs. In order to serve you
          better if SM requires additional details you agree to provide it. You
          may also give a missed call to any of our retail outlets phone number
          for us to call you back and assist you in getting your profile
          registered on our website/App. Further you may fill in your email id
          and phone number in any of our registration campaigns appearing in
          various websites as part of our advertisements, basis which you may
          receive call from our Customer Service Center and assist you in
          getting your profile registered on our website/App. SM may also
          reproduce your profile information in other matrimonial websites owned
          by MCL including community based websites to provide better matching
          Profiles to you.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          B. If at any point of time SM comes to know or is so informed by third
          party or has reasons to believe that any information provided by you
          for registration (including photos) or otherwise is found to be
          untrue, inaccurate, or incomplete, SM shall have full right to suspend
          or terminate (without any notice) your SM membership and forfeit any
          amount paid by you towards SM membership fee and refuse to provide SM
          service to you thereafter.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          C. SM also reserves the right to block the registration of your
          profile on Website/App, if any, in the case of your contact
          details/links being entered in irrelevant fields or if there are
          errors in any data entered by the SM members in their profile.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          D. Registration of duplicate profiles of the same person is not
          allowed in SM Website/App. SM shall have full right to suspend or
          terminate (without any notice) such duplicate profile.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          E. You acknowledge and confirm that your registration with SM and the
          usage of SM services is with the bonafide intention of marriage and
          not otherwise. SM Membership is restricted strictly to the registered
          SM individual member only. Organizations, companies, businesses and/or
          individuals carrying on similar or competitive business cannot become
          Members of SM and nor use the SM Service or SM members data for any
          commercial purpose, and SM reserves its right to initiate appropriate
          legal action for breach of these obligation.
        </p>

        {/* Account Security Section */}
        <h2 style={{ color: "#6D0B32" }}>Account Security</h2>
        <p style={{ color: "#333", fontSize: "14px" }}>
          You are responsible for safeguarding the confidentiality of your SM
          login credentials such as your user id, password, OTP, etc., and for
          restricting access to your computer/mobile to prevent unauthorized
          access to your account. We, as a Company do not ask for Password and
          you are cautioned not to share your password to any persons. You agree
          to accept responsibility for all activities that occur under your
          account.
        </p>

        {/* Role and Responsibility of SM Section */}
        <h2 style={{ color: "#6D0B32" }}>Role and Responsibility of SM</h2>
        <p style={{ color: "#333", fontSize: "14px" }}>
          A. SM reproduces your details once you register on our website /App on
          "as is as available" basis and also share your profile with other
          registered SM members within website(s) of MCL.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          B. SM's obligation is only to provide an interface to its registered
          members to search their prospect themselves without any assistance.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          C. The profile search conducted by any SM member and the matches shown
          thereof are automatically generated by SM, and based on the partner
          preference set by you. In the event of SM member changing their
          partner preference on the Website/App, then the automated system
          generated prospect results of the Website/App may also undergo
          corresponding change.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          D. SM does not prohibit any SM member from sending interest to your
          profile or communicating to you based on their partner preference. But
          you are at the liberty to deny their interest or proceed further if
          you are interested.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          E. SM cannot guarantee or assume responsibility for any specific
          results from the use of the data available from the SM service or from
          other matrimonial websites owned by MCL including community based
          websites.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          F. SM shall safeguard sensitive user information using security
          standards, authentication mechanisms, access controls and encryption
          techniques.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          G. SM cannot guarantee the complete protection of user data while it
          is in transit, or prevent any tampering of the data by a third party
          with malicious intent before the data reaches the SM servers.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          H. SM has a special safety feature for women, called "Secure Connect",
          which enables women to take control of their privacy and safety while
          searching for their life partner. "Secure Connect" has a calling
          feature that lets the women in SM receive calls from men who have
          premium membership without revealing their contact numbers to them, It
          is up to the women to respond to the other party and SM has no control
          over the same.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          I. SM does not authenticate/endorse any information of any profile and
          hence you as a user need to verify the credentials and information
          provided by other users.
        </p>

        {/* Role and Responsibility of SM Member Section */}
        <h2 style={{ color: "#6D0B32" }}>
          Role and Responsibility of SM Member
        </h2>
        <p style={{ color: "#333", fontSize: "14px" }}>
          A. You shall safeguard your profile information by creating a strong
          password during profile creation with a combination of alphabets, both
          upper and lower case, and numbers.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          B. Any information/data required by SM for using the SM services shall
          be provided by the SM Member, as and when so sought by SM.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          C. You are requested to verify the credentials of the prospect,
          exercise due care and caution regarding their profile information
          which includes marital status, educational qualifications, financial
          status, occupation, character, health status, etc. and satisfy
          yourself before making a choice of your match. SM shall not be liable
          for shortcoming due to any misrepresentations made by any of its SM
          members.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          D. You are required to verify the credentials of the prospect and we
          shall not be liable for any misbehavior/misrepresentations made by the
          Prospect to you during a video call. Please check "Safe Matrimony"
          link on the website/Apps for guidance.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          E. To get better search results, SM Members are expected to provide
          the latest photograph which should not be more than 3 (three) months
          old. Providing old photographs/photographs of others, inaccurate/false
          information shall be treated as a violation of terms and conditions
          and SM shall retain their right under clause 2 (b) of these terms and
          conditions.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          F. SM members are expected to disclose their health records during
          profile enrollment which includes any pre-existing illness, physical
          disability etc. Non-disclosure at the time of enrollment shall be
          treated as a violation of the terms and conditions and SM shall retain
          their right under clause 2 (b) of these terms and conditions.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          G. SM Members are advised to refrain from:
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          i. Entering into any financial transactions with prospects. SM Members
          shall not seek financial help or provide financial help from/to the
          other SM Members
          <br />
          ii. Using abusive language when they communicate with the other SM
          Members
          <br />
          iii. being discriminative or using racial comments etc.
          <br />
          iv. Sharing of confidential and personal data with each other but not
          limited to sharing of bank details, etc.
          <br />
          v. Entering into a physical relationship with any prospect before
          marriage.
          <br />
          vi. violating any law for the time being in force.
          <br />
          vii. From mentioning details of other matrimonial services while
          sending personalized messages
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          H. SM members are expected to visit URL{" "}
          <a href="https://soulmatch.co.in/">https://soulmatch.co.in/</a> for
          understanding the safety measures on partner search and awareness
          towards online safety.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          I. SM Members are expected to be cautious of prospects who ask for
          favors, money, etc., or call from multiple phone numbers, only
          interact over the phone, don’t come forward for face-to-face meetings
          (physically or through video calls), and don’t involve family and
          friends in matchmaking. Beware of suspended profile status before you
          finalize an alliance with the prospect.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          J. The SM members agree that for getting effective search results of
          prospects on Website/App you will regularly log in to the profile
          maintained on the Website/App and send an expression of interest which
          is an automated message to prospects as a free SM member, and in the
          event you have availed paid SM package, you can send personalized
          messages to prospects to show your expression of interest/replies. SM
          members also may review the expression of interest sent to you/read
          the messages sent to you by prospects and may respond suitably.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          K. You also agree that while accessing/using the Website/App, you will
          be guided by the terms and conditions of the Website/App including but
          not limited to the use of the feature of the website/App like chat
          instantly with prospects, viewing the horoscope of prospects,
          enhancing privacy settings (photo/horoscope/phone number), or for
          viewing the social and professional profile of members on their
          Facebook, LinkedIn, etc.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          L. If the SM Member fails to update on the SM website/App, any change
          in the particulars furnished in their profile/then the SM membership
          may be suspended by SM at its sole discretion.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          M. SM members shall, in case of finalization of his/her/their
          Registrant’s marriage, delete their profile by themselves or intimate
          SM for removal/deletion of their profile.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          N. SM Members agree to use secure devices, software, and networks in a
          private place for accessing the SM services.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          O. SM members shall not use any kind of Bots like web robots, Chatbot,
          or any other automated processes/programs/scripts to use, communicate
          or respond in SM Website/App.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          P. SM Members shall not probe, scan, or test the vulnerabilities of
          the SM Website/App or any network connected to the Website/App nor
          breach the security measures instituted by SM.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          Q. You shall also not make any payment/transfer any amount to the
          account of any MCL employees. All payments shall be made only to SM
          account.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          R. SM members are expected to approach MCL to resolve their complaints
          and grievances and shall not air their grievances/complaints on social
          media.
        </p>

        {/* Customer Care / Customer Service Section */}
        <h2 style={{ color: "#6D0B32" }}>Customer Care / Customer Service</h2>
        <p style={{ color: "#333", fontSize: "14px" }}>
          In the event you come across any concerns in our service, then please
          be free to contact us:
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          Email ID:{" "}
          <a href="mailto:soulmatchinfo@gmail.com">soulmatchinfo@gmail.com</a>
          <br />
          Contact No: +91 9449065433
          <br />
          Address: Sterling Terraces, 100 Feet Ring Road, Banashankari 3rd
          Stage,
          <br />
          Bangalore, Karnaraka - 560085
        </p>

        {/* Medium of Communication to SM Members Section */}
        <h2 style={{ color: "#6D0B32" }}>
          Medium of Communication to SM Members
        </h2>
        <p style={{ color: "#333", fontSize: "14px" }}>
          A. SM member hereby consents to receiving communication including
          promotional communications through any medium of communications such
          as electronic mails, calls, SMS or through Whatsapp messages from MCL
          or other portals owned by MCL or their alliance partners.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          B. SM by its automatic system sends to its member(s) profile(s) of the
          prospect by way of images/documents/messages/links. SM member confirms
          that the mobile number submitted to it for verification or alternative
          number if any provided, is not registered with the Do Not Disturb /
          National Customer Preference Register and they shall not initiate any
          complaint. SM Member further confirms that even if SM Member is
          registered with the telecom service provider under the category Do Not
          Disturb / National Customer Preference Register the calls from SM
          either to the verified mobile number or alternative number if any
          provided shall not be treated as promotional calls.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          C. You are also entitled to set up your communications frequency from
          SM, like - only on weekends or fortnightly etc. You may also opt for
          not getting any call from SM by ticking the appropriate box in the
          Website/App, provided that, you agree to receive calls from
          Relationship Manager of Assisted Matrimony/Elite Matrimony for
          contacting you as a shortlisted profile for their registered members.
        </p>

        {/* Confidentiality Section */}
        <h2 style={{ color: "#6D0B32" }}>Confidentiality</h2>
        <p style={{ color: "#333", fontSize: "14px" }}>
          Any feedback you provide to SM shall be deemed to be non-confidential.
          SM shall be free to use such feedback/information on an unrestricted
          basis. Further, by submitting the feedback, you represent and warrant
          that (i) your feedback does not contain confidential or proprietary
          information of yourself or third parties; (ii) SM member is not under
          any obligation of confidentiality, express or implied, with respect to
          the feedback; (iii) you are not entitled to any compensation or
          reimbursement of any kind from SM for the feedback under any
          circumstances.
        </p>

        {/* Privacy of Membership Section */}
        <h2 style={{ color: "#6D0B32" }}>Privacy of Membership</h2>
        <p style={{ color: "#333", fontSize: "14px" }}>
          To protect your privacy and understand our practices as amended from
          time to time, please read and follow our Privacy Policy which also
          governs your visit to SM and other websites owned by MCL, the personal
          information/data provided to us by you during the course of usage of
          SM will be treated as confidential and in accordance with the Privacy
          policy and applicable laws and regulations. If you object to your
          information being transferred or used, please do not use the website.
        </p>

        {/* Grievance Officer Section */}
        <h2 style={{ color: "#6D0B32" }}>Grievance Officer</h2>
        <p style={{ color: "#333", fontSize: "14px" }}>
          In the event you come across any violation by another user including
          but not limited to having content on the website that is obscene,
          menacing, grossly offensive, harming minors, infringing copyright,
          patents, etc., or another user is impersonating etc. you may then
          please be free to provide your concerns in writing or email us with
          digital signature to:
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          Email:{" "}
          <a href="mailto:grievanceofficer@matrimony.com">
            grievanceofficer@matrimony.com
          </a>
          <br />
          Grievance Officer: Mr. Anand Vasudev
          <br />
          Contact Address: M/s. Matrimony.com Limited,
          <br />
          No.94, TVH Beliciaa Towers, Tower - 2,
          <br />
          5th Floor, MRC Nagar, Chennai,
          <br />
          Tamil Nadu - 600028
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          The Grievance office shall be available between 10 am till 6 pm Indian
          Standard Time from Monday to Saturday excluding Sunday and public
          holidays in India. The Grievance officer is appointed as per Rule 3
          (11) of The Information Technology (Intermediaries Guidelines) Rules,
          2011. Any and all complaints to the Grievance Officer shall be in
          writing
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          The Grievance Officer shall handle complaints in relation to the
          following violation by the User of computer resources as the User is
          not entitled to host, display, upload, modify, publish, transmit,
          store, update, or share any information on the Website/App that -
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          A. belongs to another person and to which the user does not have any
          right;
          <br />
          B. is obscene, pornographic, paedophilic, invasive of another's
          privacy including bodily privacy, insulting or harassing on the basis
          of gender, racially or ethnically objectionable, relating or
          encouraging money laundering or gambling, or promoting enmity between
          different groups on the grounds of religion or caste with the intent
          to incite violence;
          <br />
          C. is harmful to a child;
          <br />
          D. infringes any patent, trademark, copyright, or other proprietary
          rights;
          <br />
          E. deceives or misleads the addressee about the origin of the message
          or knowingly and intentionally communicates any misinformation or
          information which is patently false and untrue or misleading in
          nature;
          <br />
          F. impersonates another person;
          <br />
          G. threatens the unity, integrity, defence, security or sovereignty of
          India, friendly relations with foreign States, or public order, or
          causes incitement to the commission of any cognizable offence, or
          prevents the investigation of any offence, or is insulting to another
          nation;
          <br />
          H. contains software virus or any other computer code, file or program
          designed to interrupt, destroy or limit the functionality of any
          computer resource;
          <br />
          I. violates any law for the time being in force.
        </p>
        {/* <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}> */}
        {/* Disputes between Members Section */}
        <h2 style={{ color: "#6D0B32" }}>Disputes between Members</h2>
        <p style={{ color: "#333", fontSize: "14px" }}>
          A. SM Members are solely responsible for the communications (through
          any medium) with prospects or vice versa. SM expressly disclaims any
          responsibility or liability for any monetary transaction(s) or
          exchange(s) or interaction(s) or passing of information(s) etc.
          between any SM members inter se via e-mail, chat, interaction,
          Whatsapp or any other medium of communication between SM members
          either using website /App or otherwise.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          B. SM has no obligation, to monitor any such disputes arising between
          the SM members, and SM shall not be party to any such
          dispute/litigation etc.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          C. SM is not a broker or the agent of any SM member, and SM does not
          partake in the exchange of any kind of discussion between the SM
          members and prospects or the results of their discussion.
        </p>

        {/* Content Right Section */}
        <h2 style={{ color: "#6D0B32" }}>Content Right</h2>
        <p style={{ color: "#333", fontSize: "14px" }}>
          A. You agree that all content of SM belongs to MCL excluding your or
          third party content including advertisement on the Website/App for
          which SM has requisite license/right in terms hereof to display the
          same on our Website/App.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          B. You acknowledge that you alone are responsible and liable for the
          content (mandatory or optional content you provided on our website)
          and information including the profile details, photograph and other
          content(s) keyed in the relevant field of the Website/App at the time
          of the creation of the SM profile or subsequently modified by you and
          also for all the post and communication (including personalized
          messages sent by SM paid members) with other member(s). You hereby
          represent and warrant that you own all rights, title and interest in
          your content/information or have the necessary licenses, rights,
          consents, and permissions to provide the said content/information.
          However, by submitting the content/information to SM, you hereby grant
          SM a worldwide, non-exclusive, royalty-free, sub-licensable and
          transferable license to use, reproduce, distribute, prepare derivative
          works of, display, publish, communicate to the public, law enforcement
          agencies, courts, and the SM's business and services, including
          without limitation for promoting, communicating to the public and
          redistributing part or all of the content/information (and derivative
          works thereof) in any media formats and through any media channels.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          C. While SM does not accept any obligation to monitor the
          content/information in your profile, if the content/information is
          found not to be in compliance with these Terms and conditions, SM may
          delete the content/information and/or terminate or suspend your
          registration or (without a refund of any subscription paid by you in
          terms of clause 2 (b) of these terms and conditions). You agree that
          if the situation warrants SM may at its sole discretion put
          restriction on any SM member to other member's communications.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          D. MCL reserves the right to proceed/initiate appropriate steps under
          the prevailing law against infringement by violators of its
          proprietary rights or for illegally copying, modifying, publishing,
          transmitting, distributing, performing, displaying, or selling any
          such proprietary information including using it for commercial purpose
          in any manner whatsoever.
        </p>

        {/* Third Party Website Section */}
        <h2 style={{ color: "#6D0B32" }}>Third Party Website</h2>
        <p style={{ color: "#333", fontSize: "14px" }}>
          A. SM members understand and agree that SM may allow third parties to
          put up advertisements on the SM application/Website and SM does not
          control the contents of such third party advertisement on the SM
          application/Website. Third party websites to which links are given on
          Website/App are not governed by these Terms and conditions and all
          such third party websites are governed by their own terms and
          conditions for use and privacy policy, and in case of conflict the
          terms and conditions of the third party website shall prevail. The
          Company does not in any manner whatsoever authenticate, endorse,
          verify or certify these third party websites or any contents therein.
          Please note that a user shall click on links to third party websites
          at his/her sole risk and responsibility.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          B. The SM members agree and understand that SM may also allow third
          parties to provide SM members services on the website/App like
          horoscope matching etc., and SM may also collect the payment for such
          third party services to you, and SM in this regard can have revenue
          sharing arrangement with such third party, however in no event shall
          SM be liable to you for such third party services.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          C. SM reserves the right to add/delete/alter/modify/suspend any or all
          the SM Services at any time as it may deem fit, without notice. The SM
          members are expected to see the change on the Website/App.
        </p>

        {/* Limitation of Liability Section */}
        <h2 style={{ color: "#6D0B32" }}>Limitation of Liability</h2>
        <p style={{ color: "#333", fontSize: "14px" }}>
          A. MCL / SM or its Office bearers shall under no circumstances be
          liable or responsible to the SM member or his/her authorized
          Representative or Registrant or any third party for any direct,
          indirect, special, exemplary, incidental, or consequential damages of
          any character including, without limitation, damages resulting from
          the use of our Website/App/Third Party Website/SM services.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          B. SM informs you that the exchange of profile(s) through or by SM
          should not in any way be construed as a matrimonial offer and/or
          recommendation and/or advice or guarantee given to the SM member,
          from/ or by SM.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          C. Notwithstanding anything to the contrary contained herein, SM's
          liability to you for any cause whatsoever, and regardless of the form
          of the action, will at all times be limited to the amount paid, if
          any, by you to SM, for any specific SM paid package, and no further.
        </p>

        <p style={{ color: "#333", fontSize: "14px" }}>
          15. MCL / SM will not be liable in case of any wrong/improper match
          made due to unavailability of profiles from SM/MCL’s owned other
          websites.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          16. MCL / SM or its office bearers shall under no circumstances be
          liable, if any, for the SM member entering into financial transaction
          with any other SM Member or any third party.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          17. MCL / SM or its office bearers shall under no circumstances be
          liable, if any, for any SM members not responding/reciprocating when
          you approach them for matrimonial alliance
        </p>

        {/* Class Action Suits Section */}
        <h2 style={{ color: "#6D0B32" }}>Class Action Suits</h2>
        <p style={{ color: "#333", fontSize: "14px" }}>
          You acknowledge and confirm that you will not bring or participate in
          any class action or other class proceeding in connection with any
          dispute with SM. Further neither you nor SM agrees to class
          arbitration.
        </p>

        {/* General Section */}
        <h2 style={{ color: "#6D0B32" }}>General</h2>
        <p style={{ color: "#333", fontSize: "14px" }}>
          In the event you file a false complaint against another prospect on
          our Website /App and consequently we have suspended/deleted that
          prospects profile based on your complaint, then we reserve our right
          to initiate appropriate legal (Civil/Criminal) action against you and
          claim any and all costs expenses from you, for such
          irresponsible/misrepresentation/illegal/unlawful action. We also
          reserve our right to suspend your profile and forfeit any and all
          amounts paid by you for the SM services as per clause 2 (b) of these
          terms and conditions.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          Notwithstanding anything contained herein, SM reserves the absolute
          right to delete, in any manner as it deems fit, any content of any
          profile listing placed on SM/website/App (once such instance come to
          SM notice) in order to ensure, that proper consent has been obtained
          by you, prima facie accuracy and the prevailing laws in force for the
          time being, especially those relating to providing any obscene,
          libelous, blasphemous, slanderous, defamatory or invasive of another
          person’s (deceased or alive) right of privacy or publicity, or that
          may reasonably be deemed to be harmful, vulgar, pornographic, abusive,
          harassing, threatening, hateful, objectionable with respect to race,
          religion, creed, nationality, gender or otherwise unfit for
          reproduction; or suggests or encourages unfair or illegal /indecent,
          unlawful activity. SM also reserves the right to block/ delete /
          suspend the profile which might be offensive, illegal or that might
          violate the rights, harm or threaten the safety of our office
          bearers/employees (including undue communication with any employee)
          and/or other registered prospects or using our SM website/App as a
          means of communication while sending messages to other SM members
          regarding their profile identity in other matrimonial websites.
        </p>
        <p>
          Notwithstanding anything contained herein, SM reserves the absolute
          right to delete, in any manner as it deems fit, any content of any
          profile listing placed on SM/website/App (once such instance come to
          SM notice) in order to ensure, that proper consent has been obtained
          by you , prima facie accuracy and the prevailing laws in force for the
          time being, especially those relating to providing any obscene,
          libelous, blasphemous, slanderous, defamatory or invasive of another
          person’s (deceased or alive) right of privacy or publicity, or that
          may reasonably be deemed to be harmful, vulgar, pornographic, abusive,
          harassing, threatening, hateful, objectionable with respect to race,
          religion, creed, nationality, gender or otherwise unfit for
          reproduction; or suggests or encourages unfair or illegal /indecent,
          unlawful activity. SM also reserves the right to block/ delete /
          suspend the profile which might be offensive, illegal or that might
          violate the rights, harm or threaten the safety of our office
          bearers/employees (including undue communication with any employee)
          and/or other registered prospects or using our SM website/App as a
          means of communication while sending messages to other SM members
          regarding their profile identity in other matrimonial websites.
        </p>
        <p>
          Once your paid membership expires, you cannot avail the unexpired
          balance phone call count/ unexpired SMS . Similarly, you cannot access
          the already viewed SM member(s) contact information unless you renew
          your account within 30 days.
        </p>
        <p>
          However on renewal, the unexpired phone call / SMS shall be carried
          forward to your account from the last day of expiry.
        </p>
        <p>
          In case of conflict between the terms and condition of Website/App and
          terms and conditions of any other website including other websites of
          MCL, the terms and condition of SM Website/App shall prevail for the
          service provided through this Website/App.
        </p>
        <h2 style={{ color: "#6D0B32" }}>Disclaimer</h2>
        <br />
        <p>
          A. Your access to and use of the SM Services or any content is at your
          own risk. YOU UNDERSTAND AND AGREE THAT THE SM SERVICES ARE PROVIDED
          TO YOU ON AN "AS IS" AND "AS AVAILABLE" BASIS. WITHOUT LIMITING THE
          FOREGOING, TO THE FULL EXTENT PERMITTED BY LAW, SM DISCLAIMS ALL
          WARRANTIES, EXPRESS OR IMPLIED, OF MERCHANTABILITY, FITNESS FOR A
          PARTICULAR PURPOSE, OR NON-INFRINGEMENT. SM does not warrant that the
          Website/App, its servers, or e-mail sent from SM are free of viruses
          or other harmful components. SM will not be liable for any damages of
          any kind arising from the use of this SM Website/App, including, but
          not limited to direct, indirect, incidental, punitive, and
          consequential damages.
          <br />
          <br />
          B. SM does not give any implied or explicit guarantee or warranty of
          marriage or alliance by you choosing to register on our Website/App
          and using SM services (both paid and free).
          <br />
          <br />
          C. Notwithstanding anything contrary contained anywhere, under no
          circumstances, SM shall be held responsible or liable whatsoever or
          howsoever, arising out of, relating to or connected with:
          <br />
          i. any act or omission done by SM/MCL/payment gateway/alliance partner
          etc.;
          <br />
          ii. any untrue or incorrect information submitted by you or on your
          behalf;
          <br />
          iii. any decision taken by you or on your behalf or any consequences
          thereof, based on any information provided by any other user
          (including suspension/deletion of the profile from SM);
          <br />
          iv. any unauthorized or illegal act done by any third party relating
          to or connected with any information submitted by you or on your
          behalf;
          <br />
          v. any cyber crime attempted or committed by anyone and
          <br />
          vi. any incident of force-majeure or 'act of god'.
          <br />
          vii. Any issue already stated in these terms and conditions including
          limitation of liability clause of these terms and conditions.
          <br />
          viii. Using/availing of third party services namely horoscope matching
          services etc. and for paying them through the Website.
          <br />
          ix. SM shall not be liable for the outcome of during any interaction
          in a meeting, call, sms, chat, email or social media posts at any
          point of time.
          <br />
          x. Any issues relating to any technical malfunction of any
          telecommunication network, software, hardware failures, network
          congestion, denial of service, failure due to spamming or any
          combination of the above.
          <br />
          <br />
          D. You expressly agree that your use of this Website/App is at your
          sole risk.
          <br />
          <br />
          E. We are not liable to you for any damage or alteration to your
          equipment including but not limited to computer equipment, hand-held
          device or mobile telephones as a result of the installation or use of
          the app. We are not liable to you for any damage or alteration to your
          equipment including but not limited to computer equipment, hand-held
          device or mobile telephones as a result of the installation or use of
          the app.
        </p>
        <h2 style={{ color: "#6D0B32" }}>Indemnity</h2>
        <br />
        <p>
          By using our SM services you agree to defend, indemnify, and hold
          harmless SM, its subsidiaries, affiliates, Directors, officers,
          agents, and other partners and employees, fully indemnified and
          harmless from any loss, damage, liability, claim, or demand, including
          reasonable attorney's fees, made by any person through improper use of
          the service provided by SM. This defence and indemnification
          obligation will survive in perpetuity.
        </p>
        <h2 style={{ color: "#6D0B32" }}>Termination</h2>
        <br />
        <p>
          A. We/ SM in good faith reserve our right to terminate your SM
          membership or suspend/delete your profile at our sole discretion
          without any notice to you and take any action as mentioned in clause 2
          (b) of the Terms and Conditions, in case you
          <br />
          <br />
          I. seek physical / financial favors from our other registered members
          or
          <br />
          II. have provided incorrect information on our website/App or
          <br />
          III. have committed any fraudulent/ unlawful/ illegal activities
          through the use of our website/App or
          <br />
          IV. have violated this Terms and conditions or
          <br />
          V. have misappropriated the name, likeness, email address, contact no
          or other personally identifiable information of another SM member
          created a profile on our website /App by impersonation/ fake/ bogus/
          false/ misrepresentation/ without consent of the person who’s profile
          is being registered or use only part information including using photo
          of third parties without the permission of such third parties or act
          with other members/employees in indecent/improper manner,
          <br />
          <br />
          B. If SM receives any complaint against you and consequently we have
          suspended/deleted your profile in good faith, then we shall not be
          liable to you in any manner whatsoever, including for any loss, costs,
          expenses, or consequence, if any.
          <br />
          <br />
          C. Unless otherwise provided in these Terms and Conditions, SM
          membership may be terminated by SM / you without assigning any reasons
          by serving 7 ( seven) days written notice on the other, all amount
          paid till date by you to SM shall be forfeited.
          <br />
          <br />
          D. Upon termination / suspension of SM membership, your right to use
          or access the SM Website/App SM services will cease immediately. All
          provisions of this terms and conditions that by their nature should
          survive termination shall survive termination, including, without
          limitation, disclaimers, and limitations of liability. Termination of
          your access to and use of the SM Services shall not relieve you of any
          obligations arising or accruing prior to such termination.
        </p>
        <h2 style={{ color: "#6D0B32" }}>Jurisdiction and Applicable Law </h2>
        <br />
        <p>
          A. The registration of SM membership and all SM services are deemed to
          have been entered into within the territorial Jurisdiction of Chennai,
          India.
          <br />
          <br />
          B. The SM Members unconditionally agree that all such disputes and /
          or differences if any shall be governed by the Laws of India and
          submitting to the exclusive Jurisdiction of appropriate court of law
          in Chennai, Tamil Nadu, India.
        </p>
        <h2 style={{ color: "#6D0B32" }}>Mode of Payment </h2>
        <br />
        <p>
          A. Payment made by cash / cheque / Net Banking / Debit / Credit Card/
          Paypal/ RTGS/ NEFT/ would be in accordance with the prevailing RBI
          guidelines. Activation of paid SM service shall be subject to
          realization of the said payment. In case of dishonor of Cheque/demand
          draft; you shall be liable to pay applicable bank’s cheque/DD bouncing
          charges. Further SM service to your account will be deactivated /
          suspended until you settle the value of the payment and applicable
          bank charges in cash.
          <br />
          <br />
          B. SM uses third party payment gateways for collection payment through
          credit/debit card or other payment instruments. You agree to provide
          us with your Permanent Account Number / Form 60/61 of the Income Tax
          Act, 1961 and rules thereunder in the event you choose any paid
          package of MCL, the value of such paid package being Rs.2,00,000/-
          [Rupees Two Lakh Only] and above from MCL.
          <br />
          <br /> You agree to provide us with your Permanent Account Number /
          Form 60/61 of the Income Tax Act, 1961 and rules thereunder in the
          event you choose any paid package of MCL, the value of such paid
          package being Rs.2,00,000/- [Rupees Two Lakh Only] and above from MCL.
        </p>
        <h2 style={{ color: "#6D0B32" }}>Refund and Assignment </h2>
        <br />
        <p>
          A. The payments made by any SM member to MCL by way of membership /
          renewal fee / auto renewal are treated as non-refundable.
          <br />
          <br />
          B. SM member shall not assign or transfer your SM membership to any
          other person or entity, and such an act shall be treated as violation
          of terms and conditions and SM shall retain their right under clause 2
          (b) of this terms and conditions. <br />
          <br />
          C. Payment once made for SM services cannot be assigned to any
          person/party or adjusted towards any other product or packages
          provided by the Company.
        </p>
        <h2 style={{ color: "#6D0B32" }}>Renewal </h2>
        <br />
        <p>
          A. We automatically renew all paid Memberships before the expiry of
          the term of the paid Membership. You agree that your account will be
          subject to this automatic renewal feature
          <br />
          <br />
          B. When you first subscribe for your paid Membership, you acknowledge
          that when your paid Membership expires it will automatically renew for
          the duration and at the last paid price.
          <br />
          <br />
          C. The maximum tenure of any packages will be 12 (Twelve) month. Every
          SM packages post validity period (varies from package to package),
          shall be renewed.
          <br />
          <br />
          D. If you do not want your paid membership to automatically renew, you
          must cancel your paid membership. In case you have to mail for
          cancellation, mail to cancellation.SM@matrimony.com
        </p>
        <h2 style={{ color: "#6D0B32" }}>
          {" "}
          Additional terms and conditions applicable to Non- Resident Indian
          customers.{" "}
        </h2>
        <br />
        <p>
          <strong>A. Jurisdiction</strong>
          <br />
          The laws of India shall be applicable.
          <br />
          <br />
          <strong> B. Arbitration of Disputes.</strong>
          <br />
          The Parties shall discuss among themselves and resolve any disputes
          informally. We are interested in attempting to resolve any Disputes by
          amicable and informal means, and we encourage you to contact us before
          resorting to arbitration. If the dispute is not resolved within 30 (
          thirty ) days from the date of such dispute , then such dispute may
          only be resolved through an individual arbitration conducted in
          accordance with the provisions of The Arbitration and conciliation
          Act, 1996, by sole arbitrator. The seat of Arbitration shall be
          Chennai, Tamil Nadu, India. We shall appoint the sole arbitrator. The
          arbitration proceedings shall be conducted in the English language
          <br />
          <br />
          <strong>C.</strong> However, Disputes relating to infringement of our
          intellectual property rights, which we may elect to have resolved by
          means other than arbitration.
          <br />
          <br />
          <strong>D.</strong> In case of Renewal, Customer is charged the
          current price that prevails and renewed is done only for 3 months
          duration irrespective of the past package.
          <br />
          <br />
          <strong>E. Enforcement</strong>
          <br />
          Any proceeding to enforce this arbitration agreement may be brought in
          Courts of Chennai, Tamil Nadu India.
        </p>
        <h2 style={{ color: "#6D0B32" }}>Moneyback Guarantee </h2>
        <br />
        <p>
          Within the first 90 (ninety) days of becoming a premium member, If you
          have sent a maximum of 10 (ten) messages to mutually matching
          profiles, and there has not been a single Acceptance from your
          contacted profiles, we would refund your premium amount paid within a
          period of 7(seven) working days from such intimation to us. The
          conditions for getting a refund also includes that your profile should
          be at least 95% complete and Messages sent by you should be given a
          minimum of 2(two) weeks window for getting a response.
          <br />
          <br />
          A. Users whose contact numbers are viewed by you for getting their
          acceptance over call/ personal message (or)
          <br />
          <br />
          B. This Moneyback Guarantee is applicable for the purchase of
          Gold/Diamond/Platinum packs only.
          <br />
          <br />
          C. Users who have viewed your contact number
          <br />
          <br />
          D. Users who have accepted or replied to the message sent by you (or)
          E.Users who have viewed your contact number
          <br />
          This Moneyback Guarantee is applicable for the purchase of
          Gold/Diamond/Platinum packs only.
        </p>
        <h2 style={{ color: "#6D0B32" }}>Membership Packages </h2>
        <br />
        <p>
          A. We have various premium membership packages called Gold, Diamond,
          Platinum, Prime Gold, Prime Diamond, Prime Platinum and Assisted.
          <br />
          <br />
          B. You shall opt for any of our premium membership packages varying
          between three months to one year with differing price to access
          various premium features.
          <br />
          <br />
          C. Each premium package has certain limitations on count of Phone
          number view except for Diamond and Platinum package (3,6,12 months).
          The Diamond and Platinum package (3,6,12 months) has unlimited phone
          number view but within the Fair Usage Policy limit. Viewing an
          accepted member's mobile number will not deduct the mobile number
          count (For applicable domains)
          <br />
          <br />
          D.The members of Platinum package (3,6,12 months) can receive
          Personalised Messages (PMs) from Free Members. Only if PP of Platinum
          member matches with the Personal Interest of the free member profile
          this will be allowed (For applicable domains).
        </p>
        <h2 style={{ color: "#6D0B32" }}>
          Terms & Conditions for Doorstep Services{" "}
        </h2>
        <br />
        <p>
          Service Provider: Matrimony.com Limited, CIN. L63090TN2001PLC047432,
          having registered office at No. 94, TVH Beliciaa Towers, Tower 2, 5th
          Floor, MRC Nagar, RA Puram, Chennai 600028. PLEASE READ THE FOLLOWING
          TERMS & CONDITIONS VERY CAREFULLY BEFORE AVAILING OUR DOORSTEP
          SERVICES. THESE TERMS & CONDITIONS GOVERN THE USE OF DOORSTEP
          SERVICES. BY ACCEPTING THE SERVICES, YOU ACCEPT AND CONSENT TO THE
          TERMS & CONDITIONS FOR DOORSTEP SERVICES.
          <br />
          <br />
          <strong>Services</strong>
          <br />
          SM’s Doorstep Services shall assist the Customer in registering their
          profile in Soul Match and / or Community Matrimony (hereinafter
          referred to as SM) website/ app. <br />
          The Doorstep service agent will guide the Customer through the process
          of creating their profile, usage of SM website/ app, and enlighten the
          Customer about existing packages and offers.
          <br />
          <br />
          <strong>Eligibility</strong>
          <br />
          All Indian citizens above 18 years residing within the territory of
          Chennai, India can avail the doorstep services.
          <br />
          <br />
          <strong>Booking & Payment</strong>
          <br />
          The Customers can avail the doorstep services by contacting SM, via
          its doorstep services number (8248255555). Customers are required to
          facilitate basic information including but not limited to name, mobile
          number, email id to avail the services. The Customer hereby explicitly
          gives consent for sharing the above information for the purpose of
          availing Doorstep Services and for registration of their profile in
          the online match making portals of MCL. Once the customer accesses the
          online portals / websites, the terms and conditions and Privacy Policy
          mentioned therein will be binding on the Parties.
          <br />
          The doorstep service is a paid service. The Customer is required to
          pay a services fee of Rs. 99/- (Rupees Ninety Nine only) including
          applicable GST. Payment link will be sent to the Customers mobile/
          email id through which payment can be completed either by Debit or
          Credit card/ UPI/ net banking.
          <br />
          Confirmation of the doorstep visit will be sent to the registered
          mobile number or email ID upon completion of payment.
          <br />
          Doorstep service will be initiated within 7 working days from the date
          of receipt of payment and subject to availability of the Customer,
          Door step services will be lined up and provided. The scope of
          Doorstep service is confined only to “One Visit” of the representative
          of MCL and provide guidance on various packages that are offered by
          MCL and enabling the Customer to avail the package suited to the
          requirement of the Customer. If the Customer requires a subsequent
          visit, they have to again pay the service fee and the Service Provider
          will line up doorstep service within 7 working days from the date of
          receipt of payment.
          <br />
          <br />
          <strong>Cancellation & Rescheduling</strong>
          <br />
          The Customer can cancel the Doorstep service within 24 hours of the
          scheduled visit time & date and seek a refund.
          <br />
          Refunds will be processed within 7 working days subject to deduction
          of GST amount.
          <br />
          <strong>a.</strong> Customer can seek for rescheduling the Doorstep
          service visit and based on the request of Customer, Doorstep service
          visit can be rescheduled maximum for three occasions and post which
          Customer shall forfeit the fee paid.
          <br />
          <br />
          <strong>Roles & Responsibility of SM</strong>
          <br />
          <strong>a.</strong> SM's obligation is only to assist customers in
          registration of profiles in SM’s website/ app. Post registration, the
          terms and conditions mentioned in the App / Website will govern the
          contract between the Parties.
          <br />
          <strong>b.</strong> SM shall safeguard sensitive user information
          using security standards authentication mechanisms, access controls
          and encryption techniques.
          <br />
          <strong>c.</strong> SM cannot guarantee the complete protection of
          user data while it is in transit, or prevent any tampering of the data
          by a third party with malicious intent before the data reaches the SM
          servers.
          <br />
          <strong>d.</strong> SM is not responsible for delays due to any factor
          beyond SM control or Force Majeure events.
          <br />
          <strong>e.</strong> SM is not liable for any financial transaction
          between the SM’s representative and Customer. The Customer shall not
          pay any amount to SM’s representative and any payment made towards
          service fee shall be paid only to the account of MCL.
          <br />
          <br />
          <strong>Roles & Responsibility of Customer</strong>
          <br />
          <strong>a.</strong> SM prohibits discrimination against service agents
          including on the basis of race, religion, cast, gender, age or any
          other characteristic that may be protected under applicable laws.
          <br />
          <strong>b.</strong> We request customers to treat all service agents
          with courtesy and respect. We reserve our right to withhold access to
          services at our absolute discretion if the customer’s behaviour toward
          SM service agent is in a manner which is disrespectful or abusive or
          which otherwise deem to be inappropriate or unlawful.
          <br />
          <strong>c.</strong> Customers are prohibited to do any kind of
          financial transaction directly to the representatives of MCL / SM.
          <br />
          <br />
          <strong>Privacy</strong>
          <br />
          To protect your privacy and understand our practices as amended from
          time to time, please read and follow our Privacy Policy which also
          governs your visit to SM and other websites/Apps owned by MCL, the
          personal information / data provided to us by you during the course of
          usage of SM will be treated as confidential and in accordance with the
          Privacy policy and applicable laws and regulations. If you object to
          your information being transferred or used, please do not use the
          website or App.
          <br />
          <br />
          <strong>Indemnity</strong>
          <br />
          By using our SM services you agree to defend, indemnify, and hold
          harmless SM, its subsidiaries, affiliates, Directors, officers,
          agents, and other partners and employees, fully indemnified and
          harmless from any loss, damage, liability, claim, or demand, including
          reasonable attorney's fees, made by any person through improper use of
          the service provided by SM. This defence and indemnification
          obligation will survive in perpetuity.
          <br />
          <br />
          <strong>Termination</strong>
          <br />
          SM reserves the right to terminate the services for any breach of
          these Terms & Conditions. all amount paid till date by you to SM shall
          be forfeited.
          <br />
          Upon termination / suspension of SM membership, your right to use or
          access the SM Website/App SM services will cease immediately. All
          provisions of this terms and conditions that by their nature should
          survive termination shall survive termination, including, without
          limitation, disclaimers, and limitations of liability. Termination of
          your access to and use of the SM Services shall not relieve you of any
          obligations arising or accruing prior to such termination.
          <br />
          <br />
          <strong>Governing Laws </strong>
          <br />
          The Terms & Conditions are exclusively governed by the Laws of Indian
          (Jurisdiction).
          <br />
          <br />
          <strong>Arbitration of Dispute </strong>
          <br />
          The Parties shall discuss among themselves and resolve any disputes
          informally. We are interested in attempting to resolve any Disputes by
          amicable and informal means, and we encourage you to contact us before
          resorting to arbitration. If the dispute is not resolved within 30 (
          thirty ) days from the date of such dispute , then such dispute may
          only be resolved through an individual arbitration conducted in
          accordance with the provisions of The Arbitration and Conciliation
          Act, 1996, by sole arbitrator. The seat of Arbitration shall be
          Chennai, Tamil Nadu, India.We shall appoint the sole arbitrator. The
          arbitration proceedings shall be conducted in the English language.
          <br />
          <br />
        </p>
        <p>This website is proudly powered by The Dreamy Trails.</p>
      </div>

      <footer
        style={{
          backgroundColor: "#530014",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#fff",
        }}
      >
        <div>
          {/* <Facebook style={{ marginRight: "10px" }} />
          <Instagram style={{ marginRight: "10px" }} />
          <Twitter style={{ marginRight: "10px" }} /> */}
        </div>
        <div>
          &copy; 2024 <span style={{ color: "#FFBF00" }}>SoulMatch</span> All
          rights reserved. |{" "}
          <a
            style={{ cursor: "pointer", color: "#FFBF00" }}
            onClick={() => navigate("/plan")}
          >
            Pricing Policy
          </a>
        </div>
        <div>
          {/* <Email style={{ marginRight: "10px" }} /> */}
          {/* <span style={{ color: "#FFF" }}>Email Address</span> */}
        </div>
      </footer>
    </div>
  );
}

export default TermsConditions;
