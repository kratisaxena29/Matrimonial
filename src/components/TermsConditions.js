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

  const handleTermsCondition = () => {

    navigate('/privacy&policy')
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
        <h1 style={{ color: "#6D0B32" }}>TERMS AND CONDITIONS</h1>
        <p>
        PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY .
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          Welcome to Soulmatch.co.in, your personal matchmaking platform. This Agreement sets out the legally binding terms for your use of the Site and membership. This Agreement may be modified by Soulmatch.co.in from time to time. The membership and rights of admissions are reserved.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          This Terms of Use is published in accordance with the Rule 3 (1) of the Information Technology (Intermediaries Guidelines and Digital Media Ethics Code) Rules, 2021.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          The Company makes available its services and products to you, through the Platform on the condition that you abide by these Terms and Conditions, as updated from time to time. If you do not accept the Terms and Conditions or you do not meet or comply with their provisions, you should not use or access the Platform and/or avail of the Company’s services or products via the Platform.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          The Platform is an intermediary as defined under sub-clause (w) of Section 2 of the Information Technology Act, 2000. Visitors to the Platform are granted a nonexclusive, limited license to use and access the content and services offered in accordance with these Terms and Conditions (the "License").
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          A Visitor to the platform, whether or not he/she has made any payment for availing access and/or services on the Platform, including the general browsers of the Platform, whether registered or not, are hereinafter referred to as “User/Users”.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          BY THE POSITIVE ACTS OF A USER ACCESSING THE PLATFORM, THE USER AGREES TO BE BOUND BY THE TERMS AND CONDITIONS SET FORTH BELOW (“Terms”). IF A USER DOES NOT AGREE WITH ANY OF THESE TERMS AND CONDITIONS, HE/SHE SHOULD NOT ACCESS OR USE THE PLATFORM.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          1. The Platform is owned and operated by Soulmatch, a Proprietorship Company, with its registered office currently located at A-903, Sterling Terraces, 100 Feet Ring Road, Banashankari 3rd Stage, Bangalore - 560085
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          2. The Platform is intended only to serve as a preliminary medium of contact and information for Users who have a bona fide intention to enter into a matrimonial alliance (“Purpose”). The Platform does not purport to be a marriage or business bureau or a dating /contact website.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          3. Company presumes that every User who logs on to the Platform has a bona fide intention to get married / enter into a matrimonial alliance and not otherwise. Company under no circumstances shall be responsible for any loss or damage resulting from anyone's use of the Platform or the services offered on the Platform and / or any content posted on the Platform or transmitted to Users. The exchange of matrimonial profile(s) through or by the Platform should not in any way be construed as a matrimonial offer and/or recommendation from or by the Company. Company shall not be responsible for any loss or damage to any individual arising in/out of, or subsequent to, matrimonial relations established pursuant to use of the service provided by Company.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          4. In order to use the Platform, you may sign in using your Email Id/Mobile Number/ Facebook/Google account.  If you do so, you authorize us to access and use certain Facebook/Google account information that you choose to display publicly.
          Company collects information / data including, without limitation, e-mail id, address, first name, last name, telephone/mobile number, date of birth, age, gender, ethnic/cultural background, appearance, religion, occupation, preferences, life style information, general geographical location (“User Data”) from Users in order to enable them to create their profiles on the Platform. Apart from this, certain other health related information, including physical and mental disabilities are also collected. The User Data so collected is entered in a program especially devised for matching profiles and to provide matches for Users based on their pre-selected partner preferences criteria. User Data is displayed only after taking prior consent of Users. Company does not collect financial information of Users such as credit card/debit card numbers/bank accounts numbers etc. Company shall not be able to provide access to the Platform and/or create profiles of Users if the requisite User Data is not provided by the Users. User hereby consents to usage of his/her User Data to be displayed to other Users on the Platform.
          Users hereby give us permission to use the information about their activities and actions that they have taken on the Platform in connection with ads, offers and other sponsored content that the Company displays on the Platform, without charging any fees to the Users. The Company uses data and information about Users to make relevant suggestions and recommendation to its Users.

        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          5. The User Data is uploaded by the Users themselves or through any of the Soulmatch offline centers displayed on the Platform. Company may, at its sole discretion, include all or any portion of the listing intimated by a User for display on the Platform in any other media including the matrimonial sections of other platforms including but not limited to print media, community associations, websites, television shows, DTH/IPTV Services, mobile aap sites etc. at no extra costs to the Users and Company shall not be held liable for usage/publicity of such information / data.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          6. Users undertake not to duplicate, download publish, modify and distribute material on the Platform unless specifically authorized by the Company in writing. Users undertake not to establish any deep link or other connection to any specific page of the Platform without obtaining prior written consent of the Company.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          7. Users undertake to use the Platform for their personal purposes. Using content from the Platform for creating derivative works with a commercial motive without prior written consent from the Company is strictly prohibited.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          8.The Company takes measures including technological means on the Platform to exclude robots, scripts, programs etc. from crawling or scraping content on the Platform. Users undertake not to circumvent these methods.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          9. Any advice, counseling, recommendations or information provided on the Platform including information of Users may not be necessarily correct, true or reliable, and that any reliance placed thereon and any action taken on the basis thereof shall be entirely / solely at the risk of the concerned User. Users hereby agree that access to the content available on the Platform is provided by Company to Users on an ‘AS-IS’ and ‘AS-AVAILABLE’ basis. Users wishing to use the information so provided are advised to conduct their own due diligence, in respect of the content on the Platform, at their own initiative, cost and effort. Company does not advise / recommend a User to establish any contact / interaction with other Users or any based on the data / information as furnished in such User’s profile / photograph etc. and the User opting to build contact or interact shall do it solely at his / her own risk. Company cannot be held responsible or liable, in any manner whatsoever, in respect of any reliance placed on any information displayed / placed on the Platform, since the same purports merely to act as indicators of the general scenario in the related behalf.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          10. Company does not authenticate, vet, screen, endorse or investigate any information or assertion comprised in the matrimonial listings, or any other content on the Platform, nor does it in any manner whatsoever certify or attest the same to be correct or true. It does not endorse matches and profiles in any manner, but an implied presumption is cast on the Users that the information(s) furnished are exclusively / solely to carve out / frame a suitable profile for the purpose of matrimonial alliance based on the partner preferences criteria set by the Users. All due diligence, effort and initiatives must be exercised by those wishing to use any information found on the Platform, and should take adequate precautions with the full and complete knowledge that all information contained in the matrimonial listings have been placed there directly by Users of the Platform without any prior intimation, consent or verification of or by Company
          Users of the Platform are prohibited from uploading, posting, transmitting, updating or sharing any information that:
          a) belongs to another person and to which the user does not have any right to;
          b) is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic, paedophilic, libellous, invasive of another's privacy, hateful, or racially, ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, or otherwise unlawful in any manner whatever; harm minors in any way;
          c) infringes any patent, trademark, copyright or other proprietary rights;
          d) violates any law for the time being in force;
          e) deceives or misleads the addressee about the origin of such messages or communicates any information which is grossly offensive or menacing in nature; impersonate another person;
          f) contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of the Platform ; threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognisable offence or prevents investigation of any offence or is insulting any other nation.
          Company may, without notice in its sole discretion, and at any time, terminate or restrict a User’s usage or access to the Platform (or any part thereof) and/or take down any content uploaded by a User for any reason, including, without limitation, that Company based on its judgement and perception believes the a User has violated or acted inconsistently with the letter or spirit of these Terms.

        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          11. Company is an online service provider for Users to create their own/unique profiles envisaging certain personal (optional) information(s) and User Data are to be displayed on the Platform, which information is used by Users for the Purpose. Company does not share User Data with other Users or third parties with the prior consent of the User. Although Company shall take all reasonable precautions, Company shall not be responsible in case such User Data so displayed on the Platform being unauthorisedly copied / printed / published / forged / superimposed / manipulated etc. or misused by any User. Users shall indemnify Company from all kind of losses / damages which Company may suffer from any activities carried out by them through improper use of the Platform/service provided by Company
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          12. By listing a matrimonial profile, or a business or personal listing or a link, or any content or listing, on the Platform, the concerned User making or posting such listing, and the person or persons responsible for such posting or listing, shall be deemed to have agreed to hold Company harmless and protected against any suit or complaint, civil, pecuniary or criminal, and against any claims or damages (including, without limitation, interests, fines and penalties) which may be brought against or levied on Company on account of any matter arising out of, or relating to, such posting / listing or response received from such posting/listing.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          13. Whilst using the Platform an obligation is cast upon Users to only provide true and correct information and in the case of creating a profile Users undertake at all times to keep the information up to date. Company does not represent or endorse the accuracy or reliability of any member / visitor profile, advice, opinion, statement or other information displayed / uploaded through the service by Company. Company or any of its owners, staff or agents are not responsible under any circumstances for any action/display whether direct or indirect, which occurs as a result of online display of information in the nature of illicit material / material that may be offensive to visitors / members or is patently offensive to the on-line community or any material which may promote racism, bigotry, hatred or physical/mental harm of any kind to any group or individual or transmit any chain letters or junk mail or unsolicited mass mailing or spamming or obscene material to other users / members. Company does not monitor the conduct of Users and therefore Company does not take the responsibility of any conduct by Users who may avail / obtain / use / exploit the online service provided by Company in order to harass, abuse or harm another Users or use the said online service to promote / advertise / solicit anything without their prior consent or an act in any manner which may threaten the safety of other Users.
        </p>

        <p style={{ color: "#333", fontSize: "14px" }}>
          14. Company reserves the right to remove / delete any content / message / photo(s) / profile or cancel the registration / membership of a User either upon a complaint received from another User or upon discovery of the same on its own or based on its sole judgment and perception and it shall without notice stop providing the service entitled to a User and forfeit all other incidental service(s) with immediate effect along with the fee/tenure of registration as well as take appropriate legal action against such User. By listing a profile on the Platform, it is deemed that the said User has an intention to get married and in case it appears to Company that at the time of listing the profile or subsequently such User had no intention to enter into a matrimonial alliance or has changed his/her intention, then Company shall reserve the right to remove / delete such profile from the Platform and initiate prosecution under the law or take such steps as may be advised from time to time. By using the Platform, it is deemed that the User agrees not to post any content or views that may be considered threatening, abusive, vulgar, obscene or otherwise objectionable or act illegally or otherwise harass another user; put wrong or misleading information in any of the details of his/her own profile; impersonate another or use the site for any commercial purposes; or interfere with or disrupt the operation of this site, or disobey any reasonable requirements, procedures or policies imposed by Company from time to time.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          15. Nothing comprised in the contents of the Platform is intended or meant to induce or persuade or convince or invite any person whatsoever to perform any action or do any such thing, or not to perform or do, where such performance or doing, or non-performance or not doing, constitute any contravention of any law or regulation in force for the time being to which such person or action may be governed.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          16. Company shall not be held responsible for any interactions/ passing of information(s) etc. between any User via e-mail, chat or any other medium with another User and Company has no obligation, to monitor any such disputes arising between the Users and Company shall not be party to such dispute/litigation etc.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          17. Company reserves the absolute right to modify or amend or delete, in any manner as it deems fit, any content of any matrimonial listing placed on the Platform in order to ensure compliance with the rules of such placement (which may include, without limitation, the efforts and initiatives by Company to maximize response to matrimonial listings), prima facie accuracy and the prevailing laws in force for the time being, especially those relating to prohibition of any indecent, unlawful or obscene content. Company reserves the absolute right to delete any profile if it finds that the same person has created multiple profiles on the Platform. Even if different profiles have been created with the same contact details, Company will reserve the absolute right to delete all such profiles. If any member refuses to give consent to a physical address verification that Company has requested then Company will have the absolute right to either put a "Not Verified" stamp on the profile or to delete the profile.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
          18. Websites to which links are given on the Platform and the contents thereof are the sole responsibility of the promoters of such websites and Company does not, in any manner whatsoever, recommend, authenticate, endorse, verify or certify these websites or any contents or links there. Company does not take any responsibility for the privacy practice adopted by such other websites and therefore Company recommends Users to read the privacy statement of each and every website that they visits. Company also does not take any responsibility or endorse the authenticity of the other online services displayed on the Platform which may offer various services like a lucky draw, win a free trip, win free tickets, astrology, palmistry, numerology etc. User of the Platform shall at its sole risk and responsibility click and surf on to such other website(s) / links which is/are being displayed on the Platform. Users shall always bear in mind that at a single stroke/click of the mouse on such links/website, it gets connected through the Transmission Control Protocol (TCP) / Internet Protocol (IP) network of the said Users and not through the IP of the Platform. Company also does not suggest/encourage Users to furnish personal information and specially the Profile ID / User Name of the User on the Platform to such or any other website(s).
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
        19. Company reserves the right to tie up with partners in future to come up with various other online services. However, Company shall never share the information / data collected from Users with such other partners without taking prior consent / permission from such Users. Company in such circumstances suggests that Users peruse the privacy policy of such partners before giving their consent or before furnishing personal identifiable information with such other website(s). Company is not privy to the privacy practice adopted by its partners and does not take the responsibility in respect of the privacy policy adopted / to be adopted by such partners. Company also reserves the right to use / share the information / data collected from Users with its partners if a User has already made public the information / data to Users of the Platform.     
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
        20. Company hereby specifically disclaims any liabilities or warranties or guarantees, express, specific or implied, which may be attributable, in any manner whatsoever, to the existence, promotion, canvassing, contents, links, information or discontinuance of the Platform. No claims for damages, restitution, loss-of-profits, or any other pecuniary, civil or criminal plaints, which may be said to arise out, or on account, of any matter contained or related to the Platform, shall lie or be deemed to be sustainable against Company.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
        21. Company assumes no responsibility for any error, omission, interruption, deletion, defect, delay in operation or transmission, communications line failure, theft or destruction or unauthorized access to, or alteration of User communications. Company is not responsible for any problems or technical malfunction of any telephone network or lines, computer online systems, servers or providers, computer equipment, software, failure of e-mail or players on account of technical problems or traffic congestion on the internet or at any website or combination thereof, including injury or damage to Users or to any other person's computer related to or resulting from participating or downloading materials /information from the Platform.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
        22. Users who visit the Platform are classNameified by Company as Users with incomplete or complete profiles. Both these types could further be free members or paid members. Company reserves the absolute right to modify, amend, change, curtail or expand any privileges, rights, benefits, liabilities or responsibilities of all types of paid Users or free Users as it deems fit and these will be instantly applicable to all past, present and future Users. Company allows free Users certain benefits /privileges like initiating free contact via "Express Interest" functionality, like viewing contact details of paid Users under certain conditions etc. The quantum of these benefits and even the benefits in totality will be at the sole discretion of Company. Company will determine at its own discretion how many benefits it offers to every free User. Company will simultaneously offer different levels of benefits to different free Users Benefit restriction to free Users will be done via multiple means including restricting access, spam filters, quotas etc.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
        23. Payments for the services offered on the Platform shall be on a 100% advance basis. The payment for service once subscribed to by the User is not refundable and any amount paid shall stand appropriated. Refund if any will be at the sole discretion of the Company and it offers no guarantees whatsoever for the accuracy or timeliness of the refunds reaching the User’s card/bank accounts.  Company gives no guarantees of server uptime or applications working properly. All is on a best effort basis and Company’s liability for losses, damages and claims hereunder is limited to refund of amount only. Company undertakes no liability for free services. Company reserves its right to amend / alter or change all or any disclaimers or these Terms at any time without any prior notice.  All terms / disclaimers whether specifically mentioned or not shall be deemed to be included if any reference is made to them. The continued usage of the Platform by a User shall constitute deemed acceptance by the User of the amended Terms.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
        24. The User is solely and exclusively responsible for maintaining confidentiality of the User password and User identification and all activities and transmission performed by the User through his/her user identification and shall be solely responsible for carrying out any online or off-line transaction involving credit cards / debit cards or such other forms of instruments or documents for making such transactions and Company assumes no responsibility or liability for their improper use of information 
        relating to such usage of credit cards / debit cards used by the subscriber online / offline. Company uses reasonable care as is necessary to ensure that all or any data / information does not fall in the wrong hands. The weak link in credit card transaction is securely storing the data once received; therefore Company does not store or keep credit card/debit card/bank account. For the purposes of ensuring the maximum security for the financial information of a user (such as credit card/debit card/internet banking data) all such online payment transactions are carried out directly on the secured platforms of payment gateways and not on the Platform.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
        25. Company does not warrant that the Platform will be uninterrupted or error-free. Company provides the service on an "as is" basis. However, Company will take all reasonable steps to provide its users with error free, uninterrupted user experience. There may be delays, omissions, and interruptions in the availability of the Platform. Users acknowledge that use of the Platform is solely at their cost and risk. Company is not responsible for suspension of the services on the Platform, irrespective of the reason for such interruption / suspension. Company may discontinue or change the services on the Platform or its availability at any time, and the User is 
        also free to stop availing the services on the Platform at any time.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
        26. The Company uses third party payment gateways on the Platform and failures in these gateways would be communicated to the users as it is. Extra currency/conversion charges/deductions/error issues from payment gateway shall not be the
         responsibility of the Company.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
        27. Company has complete rights in the Platform and the services provided thereunder. The Platform contains to the extent protected by applicable laws, copyrighted material, trademarks, and other proprietary information of its owners and its licensors. Except for that information which is in the public domain or for any other information/display for which permission have not been obtained from Company, Company reserves the right to proceed/initiate appropriate steps under the prevailing law against infringement of the said proprietary rights for illegal copying, modifying, publishing, transmitting, distributing,
         performing, displaying, or selling of any such proprietary information.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
        28. Company reserves the right to verify the authenticity of Content posted on the site. Company if circumstances warrant may call for / ask any of its Users to provide documentary or other form of evidence supporting the information / User Data posted on the Platform and the User, without any protest shall produce such documentary / other evidence in support of such information and if the User fails to produce such information within a reasonable or stipulated time frame, Company may, in its sole discretion, terminate the profile/access to the Platform and forfeit the advance without a refund and take appropriate steps under the provisions of law. Company also reserves the right to investigate and take appropriate legal action without limitation at its sole discretion against any User who violates / misuses the online services and terminating the profile/access to the Platform of such violators without prior intimation who utilise the Platform in any manner which brings into 
        disrepute or impairs the interests and functioning of Platform or the Company.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
        29. Company also reserves the right to investigate and take appropriate legal action without limitation at its sole discretion against any User who violates / misuses the online services and terminating the profile/access to the Platform of such violators without prior intimation who utilise the Platform in any manner which brings into disrepute or impairs the interests and functioning of Platform or the Company.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
        30. Company does not take the responsibility of any information posted by its Users on the Platform, any copyrighted material, trademarks, or other proprietary information without obtaining the prior written consent of the owner of such proprietary rights and in case Company receives/discovers any such infringement, the said User may be called for / asked to furnish / provide evidence / relevant information in support of such display like an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest or a description of the copyrighted work that may have been infringed or information or a written statement that the User under bona-fide faith belief that the disputed information does not lead to any authorized use or infringement of copyright etc, under the law or a statement that the User is liable to penalty of perjury in case any of the information/statement furnished is proved otherwise or a declaration that the information displayed/posted is accurate and the User is itself the copyright 
        owner or authorized to act on the copyright owner's behalf.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
        31. Company has no obligation to monitor the activities of its Users. However, Company has the right to monitor the Platform electronically from time to time and to disclose any information as necessary to satisfy any law, regulation or other governmental request, to operate the Platform properly, or to protect itself or its Users. Company also reserves the right to refuse to post or to remove any information or materials, in whole or in part, that, in its sole discretion, are unacceptable, 
        undesirable, or violative of provision of law.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }}>
        32. The usage of this Platform and any disputes/issues arising out of it shall be subject to the applicable laws in force for the time being in the NCT of Delhi irrespective of conflicting provisions
         of law and to the exclusive jurisdiction of courts located in New Delhi.
        </p>

        <p style={{ color: "#333", fontSize: "14px" }}>
        33. All members of Platform are restricted to the following number of contacts they can make via the "Express Interest" option on the Platform.

 1) - Daily Limit	100
 2) - Weekly Limit	300
 3) - Monthly Limit	1000
      
        </p>
        <p style={{ color: "#333", fontSize: "14px" }} >
        34. In case Company receives any incriminating evidence/complaint against any User from other Users of the Platform or if Company, through data available to it from its servers, suspects misbehavior on any User’s part, it reserves the right to impose restrictions on the User’s account which include but may not be confined to preventing the User under question from making multiple contacts and restricting the user to only contact members whose desired partner profile the User satisfies.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }} >
        35. All services which are defined by time period indicated in months shall imply 1 month to be equal to 30 days and for any longer durations service the total duration in days will be the number of months multiplied by 30.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }} >
        36. Company guidelines prohibit members to give their name and/or contact details in any form - Email, Phone nos., Messenger Ids, Postal address etc in any fields other than the specific ones where the same information is asked. If any member who puts the above information in any field other than the one meant for that purpose then the Company screening team will remove the same.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }} >
        37. Users of the Platform are consenting for receiving
a) Membership Emails: Emails conveying the benefits of paid membership to Users. These are sent to the Email address mentioned by the Users in their profile.
b) Important Notifications from the Platform – Messages/notifications are sent to Users to inform them of various alerts related to usage of the Platform. . These will be communicated to the Users by Email/app notifications etc. or on their Landline/Mobile from a number via SMS/MMS/VMS/USSD/IVR/Calls etc.
c) Membership SMSes/Calls: SMSes or phone calls shall be sent conveying the benefits of paid membership to Users. Users will receive these calls or SMS on any of the phone numbers mentioned by Users on their profile, if they have subscribed to calls/ SMS in their alert manager settings.

        </p>
        <p style={{ color: "#333", fontSize: "14px" }} >
        38. Users who sign up for Soulmatch Exclusive services allow the Company to find suitable candidate/prospects on their behalf as per their instructions via Telephone, SMS, profile action on Soulmatch Platform, face to face interaction or any other means/modes of communication.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }} >
        39. Creation of duplicate profile on Soulmatch is prohibited. In case the user has forgotten his password he can use the password retrieval option. Forgetting password, User ID, reaching contact limits or any other reason for creating a 2nd profile on Soulmatch is not allowed. Info Edge reserves the right to delete/block this profile or restrict access of this profile to use the Platform. Info edge at its own discretion can decide to delete/block/restrict access of 2nd profile or the original profile or both profiles in all cases where duplicate profiles have been found.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }} >
        40. Membership Renewal: People who have subscribed to Gold, Diamond or Platinum have an option to renew their services. If the renewal happens before the expiry date, then any unused "Contact Views" available with the original pack are carried forward except when renewing to ‘’Basic’’ plan . Contact Views are the facility wherein members can see contact details of other members who have not filtered/rejected/ignored them. If a member renews his membership after the expiry of current membership, then it is treated as a fresh membership and unused "Contact Views" of the previous membership are not carried forward. These conditions hold even if the renewal of the subscription is bundled with a special "Renewal/Repurchase/Loyalty" offer. Purchase before or after renewal date is the only criteria which determines if unused "Contact Views" are carried forward or not.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }} >
        41. Your "Name" will be visible to other members who are Soulmatch Paid and Free subscribers either if they "View Your Contact Details" or if you have sent them an Acceptance. Information filled by a member is visible on the profile page. This page is indexed by Google/Ask/Bing/Yahoo and other search engines. If a search engine user types a query then your profile page may be visible in Google/Bing/Yahoo etc. search results. All details which you have put will be visible unless the same has been explicitly hidden by you using appropriate Platform profile privacy settings.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }} >
        42. Use of certain features on the Platform is governed by rules. For example if your phone number is not verified then you cannot contact other members via "Express Interest" or even if the same is happening then that privilege can be blocked by Company at any time without giving any notice. Similarly If your phone number is not verified then even as a person who has availed a "Paid Service" you will still not be able to view phone/email/contact details of other members via any option on the Platform. For verifying your phone number, there are verification prompts across the Platform which guide you on how to verify your phone. If the same is not clear then it is the member's responsibility to call customer care of Platform from the number which he/she wishes to verify.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }} >
        43. Any paid membership/Consumable Plans like Basic, eRishta, eValue, e Advantage, JS exclusive, Pro Lite, Pro, Pro Max Trial Pack, etc. are non-transferable. Any membership which is purchased is being purchased for the individual/profile and cannot be used for any other profile in his/her family/friends/acquaintances etc. If a profile is deleted for whatsoever reason then that persons membership lapses.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }} >
        44. At times when a member tries to access the phone/email of another member, he can get a message which asks him to "View Phone/Email tomorrow - Contact limits reached of recipient" or any message which means the same. In these cases the member just needs to visit the same profile again the next days and use his quota of "View Contacts".
        </p>
        <p style={{ color: "#333", fontSize: "14px" }} >
        45. 'Contact Details' may consist of one or more of the following details - a. Mobile number(s), b. Landline number and c. Email address. Having a paid subscription apart from Basic plan unlocks access to 'Contact Details' subject to the following conditions: i. Access to Contact Details may be restricted based on privacy settings with respect to phone number(s) or contact filters opted by the other person or if the other person has blocked, declined or cancelled interest, ii. A fair usage limit of at most 25 contact views per month of subscription duration applies for viewing contact details of people who are not 'Accepted members' or are excluded due to condition i) above, and iii. Access to contact details is not possible if the other person is not an accepted member and the other person’s contact details have already been viewed 10 times during the day. Except for those opting for Basic plan, there is no usage limit for accessing contact details of accepted members for paid subscribers.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }} >
        46. Paid Membership is co-extensive with the profile, membership expires as soon as the profile is deleted and cannot be reactivated.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }} >
        47. 'Featured Profile' subscribers will be considered to be shown at the top of search results only if they regularly login to their account. If 'Featured Profile' subscribers don't access the Platform for more than 15 days, they will be removed from the pool of users considered for being shown at the top of Search Page.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }} >
        48. Consumable plans like contact views, spotlight etc. Will expire in 1 year unless otherwise specified.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }} >
        49. Profile viewing limits, decided based on the membership status of the user are subject to change at any time. 
        </p>
        <p style={{ color: "#333", fontSize: "14px" }} >
        50. All membership benefits like spotlight, contact views etc. Will expire with the membership, unless renewed before expiry.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }} >
        51. Any profile deleted by the profile user cannot be retrieved under any circumstances.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }} >
        52. Coupons generated for referrals on Soulmatch have an expiry date of one year from the date of generation. Coupons will only be awarded to the referrer and the referee if the referee registers from the link sent by Soulmatch (on Email or through share options). However, coupons are not valid for USD Payments, coupons are not valid on Plan upgrades, coupon code discounts cannot be combined with any other offer on the Platform and coupons cannot be availed on three (3) months and six (6) month plans. 
        </p>
        <p style={{ color: "#333", fontSize: "14px" }} >
        53. Unless otherwise specified and notwithstanding anything contained in any other agreement or arrangement, by whatever name called, the performance obligation of Company (service provider) is to provide access of its on-line portal to the customer for the duration of the subscription period & reference to any usage, by whatever name called or any other performance obligation, if any, is to provide the upper limit for consumption, which by itself, does not create any additional performance obligation upon Company.
        </p>
        <p style={{ color: "#333", fontSize: "14px" }} >
        54. We do housekeeping of profiles which are not logged in for a period of 12 months. We remove all the data associated with the profile during housekeeping. 
        </p>
        <p style={{ color: "#333", fontSize: "14px" }} >
          <p>
        55. The pricing and the contact views allotted will be on prorata basis as computed by Soulmatch. The plan upgrades will be valid till the expiry of the original plan bought.
Restriction / Prohibitions The following actions will inter alia constitute a misuse of the Platform and are strictly prohibited:
</p>
<p>
(i) Copying, extracting, downloading, sharing, modifying, selling, storing, distributing, making derivate works from or otherwise exploiting any content, data, information, including profiles, curriculum vitae, photographs and/or graphics, available on the Platform and/or any services or products of the Company, in any manner or for any purpose which is not, consistent with the Purpose and/or in accordance with the Terms of Use. 
Users are expressly prohibited from using or exploiting the Platform and/or any content or data provided therein for:
</p>
<p>
(a) any commercial purposes such as creating alternate databases, extending access to the Platform to third parties without prior written consent of the Company; and/or
</p>
<p>
(b) undertaking any business activity which is in competition with the business of the Company; and/or
</p>
<p>
(c) for seeking fees in any name whatsoever; and/or 
</p>
<p>
(d) approaching candidates/jobseekers for any purposes other than for specific existing vacancies; and/or
</p>
<p>
(e) Sharing access with persons who are not contracted with the Company.
</p>
<p>
(f) Reselling the products/services offered by the Company.
</p>
<p>
(ii) (Using or attempting to use any automated program, software or system or any similar or equivalent process (including spiders, robots, crawlers etc.) to access, navigate, search, copy, monitor, download, scrape, crawl or otherwise extract in any manner, any data or content including but not limited to adding or downloading profiles, contact details, or send or redirect messages from the Platform;
</p>
<p>
(iii) Gaining or attempting to gain unauthorized access (inter alia by hacking, password “mining” or any other means) to:
</p>
<p>
(a) any portion or feature of the Platform or any of the services or products offered on or through the Platform which are not intended for you; 
</p>
<p>
(b) any server, website, program or computer systems of the Company or any other third parties and/or Users; 
</p>
<p>
(iv) Modifying the services provided through the Platform or their appearance using any technology or overlay any additional offering on top of such services or simulate the Platform’s services or its functions in any manner whatsoever without explicit consent obtained in writing by approaching us at contactus@soulmatch.co.in.
</p>
<p>
(v) Accessing the Platform through interfaces other than those expressly provided by Company;
</p>
<p>
(vi) Attempting to breach or breaching any security or authentication measures set up by the Company in relation to the Platform and/or attempting to probe, scan or test the vulnerability of the Company’s system or network;
</p>
<p>
(vii) Scraping, downloading (including bulk- downloading), replicating or otherwise extracting any information or data from the Platform (by any process, whether automatic or manual) to offer any products or services which are similar to or may in any manner compete with the products or services of the Company;
</p>
<p>
(viii) Reverse engineering, decompiling, disassembling, deciphering or otherwise attempting to do any of the aforesaid or deriving the source code for the Site or Application or any related technology or any part thereof;
</p>
<p>
(ix) Circumventing or attempting to circumvent any technological protections used or employed by the Company or by any third party in order to protect the content on the Platform and/or to exclude robots, spiders etc. from crawling and /or scraping content from the Platform.
</p>
<p>
(x) Bypassing or Circumventing or trying to circumvent any service limits including but not limited to Search limits, Captcha limits and occurrences on different triggers
</p>
<p>
(xi) Interfering with or disrupting or attempting to interfere with or disrupt (including by using any device, software or routine), the use of the Platform or any computer networks connected to the Platform, by any other User;
</p>
<p>
(xii) Developing, using or attempting to use any automated program, scripts, robots, third party software or system or any similar or equivalent process (including spiders, robots, crawlers, browser plug-ins/extensions/add-ons, iframes on third party sites, mirroring, HTML parsers etc.) to access, navigate, search, copy, monitor, download, scrape, crawl or otherwise extract or modify  in any manner, any data or content from the Platform without explicit consent obtained in writing by approaching us at contactus@soulmatch.co.in; 
</p>
<p>
(xiii) Impersonating any other person or entity, or making any misrepresentation as to your employment by or affiliation with any person or entity;
</p>
<p>
(xiv) Forging headers or in any manner manipulating identifiers in order to disguise the origin of any user information;
</p>
<p>
(xv) Stalking, threatening, or in any manner harassing any other User;
</p>
<p>
(xvi) Imposing an unreasonable or disproportionately large load on the Platform infrastructure;
</p>
<p>
(xvii) Engaging in “framing,” “mirroring,” or otherwise simulating the appearance or function of the Platform (or any part thereof) and providing deeplinks into this Platform (or any part thereof) without prior permission of Company;
</p>
<p>
(xviii) Spamming the Platform/Company or any other Users including by uploading, posting, emailing, SMS, transmitting or otherwise making available either directly or indirectly, any unsolicited bulk e-mail or unsolicited commercial e-mail.
</p>
<p>
(xix) Using the Platform or the contact details of Users for transmitting marketing and promotional mailers/ Offensive messages/ messages or communications using any media that are unrelated to matrimony or sending unsolicited commercial communications with misleading subject lines in order to intentionally obfuscate the original message.
</p>
<p>
(xx) Hosting, modifying, uploading, posting, transmitting, publishing, or distributing any material or information that:
</p>
<p>
a. Violates any applicable local, provincial, state, national or international law, statute, ordinance, rule or regulation for the time being in force;
</p>
<p>
b. Belongs to another person and to which you have no right;
</p>
<p>
c. Infringes, breaches or otherwise contravenes the rights of the Company or any third party, including any copyright, trademark, patent, rights of privacy or publicity or any other proprietary rights;
</p>
<p>
d. Contains computer viruses, or other computer code, files or programs designed to disrupt, destroy or interfere with or limit the functioning of the Platform, or any other computer system or resource;
</p>
<p>
e. Is grossly harmful, harassing, invasive of another's privacy, hateful, disparaging, relating to or encouraging money laundering or gambling in any manner, any content which is or may potentially be perceived as being harmful, threatening, abusive, harassing, defamatory, libelous, blasphemous, vulgar, pornographic, paedophilic, obscene, or racially, ethnically, or otherwise unlawful in any manner whatsoever;
</p>
<p>
f. Which constitutes or encourages conduct that would constitute a criminal offence, give rise to other liability, or otherwise violate applicable law;
</p>
<p>
g. That deceives or misleads the addressee about the origin of such messages or communicates any information which is grossly offensive or menacing in nature;
</p>
<p>
h. That harms minors in any way;
</p>
<p>
i. That threatens the unity, integrity, defense, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognisable offence or prevents investigation of any offence or is insulting to any other nation.
</p>

        </p>
       
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
          Date: Friday(2024-06-21), Time: 08:57 PM
        </p> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
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
        </p> */}
        {/* <h2 style={{ color: "#6D0B32" }}>Scope</h2>
        <p style={{ color: "#333", fontSize: "14px" }}>
          You understand and acknowledge that Soul Match (SM) acts as an
          "Intermediary" as defined under clause (1) sub-clause (w) of Section 2
          of the Information Technology Act, 2000. SM is a brand owned by
          Matrimony.Com Limited (MCL) which owns, retains and has complete
          rights in SM and the SM Website /App/ SM Service.
        </p> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
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
        </p> */}

        {/* Eligibility Section */}
        {/* <h2 style={{ color: "#6D0B32" }}>Eligibility</h2> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
          A) SMMembership and rights of admission is reserved solely for:
        </p> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
          I. Indian Nationals & Citizens.
          <br />
          II. Persons of Indian Origin (PIO).
          <br />
          III. Non Resident Indians (NRI).
          <br />
          IV. Persons of Indian Descent or Indian Heritage
          <br />
          V. Persons who intend to marry persons of Indian Origin.
        </p> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
          B) Further in capacity as SM member you confirm that you are:
        </p> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
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
        </p> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
          C) In case you are a Registrant of the prospective bride/ bridegroom
          and has created profile in SM Website/App on behalf of them or is
          accessing the SM Website/App on behalf of them implies that you have
          taken their consent for their profile creation in SM and for accessing
          the SM Website/App.
        </p> */}

        {/* Registration Section */}
        {/* <h2 style={{ color: "#6D0B32" }}>Registration</h2> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
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
        </p> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
          B. If at any point of time SM comes to know or is so informed by third
          party or has reasons to believe that any information provided by you
          for registration (including photos) or otherwise is found to be
          untrue, inaccurate, or incomplete, SM shall have full right to suspend
          or terminate (without any notice) your SM membership and forfeit any
          amount paid by you towards SM membership fee and refuse to provide SM
          service to you thereafter.
        </p> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
          C. SM also reserves the right to block the registration of your
          profile on Website/App, if any, in the case of your contact
          details/links being entered in irrelevant fields or if there are
          errors in any data entered by the SM members in their profile.
        </p> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
          D. Registration of duplicate profiles of the same person is not
          allowed in SM Website/App. SM shall have full right to suspend or
          terminate (without any notice) such duplicate profile.
        </p> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
          E. You acknowledge and confirm that your registration with SM and the
          usage of SM services is with the bonafide intention of marriage and
          not otherwise. SM Membership is restricted strictly to the registered
          SM individual member only. Organizations, companies, businesses and/or
          individuals carrying on similar or competitive business cannot become
          Members of SM and nor use the SM Service or SM members data for any
          commercial purpose, and SM reserves its right to initiate appropriate
          legal action for breach of these obligation.
        </p> */}

        {/* Account Security Section */}
        {/* <h2 style={{ color: "#6D0B32" }}>Account Security</h2> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
          You are responsible for safeguarding the confidentiality of your SM
          login credentials such as your user id, password, OTP, etc., and for
          restricting access to your computer/mobile to prevent unauthorized
          access to your account. We, as a Company do not ask for Password and
          you are cautioned not to share your password to any persons. You agree
          to accept responsibility for all activities that occur under your
          account.
        </p> */}

        {/* Role and Responsibility of SM Section */}
        {/* <h2 style={{ color: "#6D0B32" }}>Role and Responsibility of SM</h2> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
          A. SM reproduces your details once you register on our website /App on
          "as is as available" basis and also share your profile with other
          registered SM members within website(s) of MCL.
        </p> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
          B. SM's obligation is only to provide an interface to its registered
          members to search their prospect themselves without any assistance.
        </p> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
          C. The profile search conducted by any SM member and the matches shown
          thereof are automatically generated by SM, and based on the partner
          preference set by you. In the event of SM member changing their
          partner preference on the Website/App, then the automated system
          generated prospect results of the Website/App may also undergo
          corresponding change.
        </p> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
          D. SM does not prohibit any SM member from sending interest to your
          profile or communicating to you based on their partner preference. But
          you are at the liberty to deny their interest or proceed further if
          you are interested.
        </p> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
          E. SM cannot guarantee or assume responsibility for any specific
          results from the use of the data available from the SM service or from
          other matrimonial websites owned by MCL including community based
          websites.
        </p> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
          F. SM shall safeguard sensitive user information using security
          standards, authentication mechanisms, access controls and encryption
          techniques.
        </p> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
          G. SM cannot guarantee the complete protection of user data while it
          is in transit, or prevent any tampering of the data by a third party
          with malicious intent before the data reaches the SM servers.
        </p> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
          H. SM has a special safety feature for women, called "Secure Connect",
          which enables women to take control of their privacy and safety while
          searching for their life partner. "Secure Connect" has a calling
          feature that lets the women in SM receive calls from men who have
          premium membership without revealing their contact numbers to them, It
          is up to the women to respond to the other party and SM has no control
          over the same.
        </p> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
          I. SM does not authenticate/endorse any information of any profile and
          hence you as a user need to verify the credentials and information
          provided by other users.
        </p> */}

        {/* Role and Responsibility of SM Member Section */}
        {/* <h2 style={{ color: "#6D0B32" }}>
          Role and Responsibility of SM Member
        </h2> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
          A. You shall safeguard your profile information by creating a strong
          password during profile creation with a combination of alphabets, both
          upper and lower case, and numbers.
        </p> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
          B. Any information/data required by SM for using the SM services shall
          be provided by the SM Member, as and when so sought by SM.
        </p> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
          C. You are requested to verify the credentials of the prospect,
          exercise due care and caution regarding their profile information
          which includes marital status, educational qualifications, financial
          status, occupation, character, health status, etc. and satisfy
          yourself before making a choice of your match. SM shall not be liable
          for shortcoming due to any misrepresentations made by any of its SM
          members.
        </p> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
          D. You are required to verify the credentials of the prospect and we
          shall not be liable for any misbehavior/misrepresentations made by the
          Prospect to you during a video call. Please check "Safe Matrimony"
          link on the website/Apps for guidance.
        </p> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
          E. To get better search results, SM Members are expected to provide
          the latest photograph which should not be more than 3 (three) months
          old. Providing old photographs/photographs of others, inaccurate/false
          information shall be treated as a violation of terms and conditions
          and SM shall retain their right under clause 2 (b) of these terms and
          conditions.
        </p> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
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
        </p> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
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
        </p> */}
        {/* <p style={{ color: "#333", fontSize: "14px" }}>
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
        </p> */}

        {/* Customer Care / Customer Service Section */}
        {/* <h2 style={{ color: "#6D0B32" }}>Customer Care / Customer Service</h2>
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
        </p> */}

        {/* Medium of Communication to SM Members Section */}
        {/* <h2 style={{ color: "#6D0B32" }}>
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
        </p> */}

        {/* Confidentiality Section */}
        {/* <h2 style={{ color: "#6D0B32" }}>Confidentiality</h2>
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
        </p> */}

        {/* Privacy of Membership Section */}
        {/* <h2 style={{ color: "#6D0B32" }}>Privacy of Membership</h2>
        <p style={{ color: "#333", fontSize: "14px" }}>
          To protect your privacy and understand our practices as amended from
          time to time, please read and follow our Privacy Policy which also
          governs your visit to SM and other websites owned by MCL, the personal
          information/data provided to us by you during the course of usage of
          SM will be treated as confidential and in accordance with the Privacy
          policy and applicable laws and regulations. If you object to your
          information being transferred or used, please do not use the website.
        </p> */}

        {/* Grievance Officer Section */}
        {/* <h2 style={{ color: "#6D0B32" }}>Grievance Officer</h2>
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
        </p> */}
        {/* <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}> */}
        {/* Disputes between Members Section */}
        {/* <h2 style={{ color: "#6D0B32" }}>Disputes between Members</h2>
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
        </p> */}

        {/* Content Right Section */}
        {/* <h2 style={{ color: "#6D0B32" }}>Content Right</h2>
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
        </p> */}

        {/* Third Party Website Section */}
        {/* <h2 style={{ color: "#6D0B32" }}>Third Party Website</h2>
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
        </p> */}

        {/* Limitation of Liability Section */}
        {/* <h2 style={{ color: "#6D0B32" }}>Limitation of Liability</h2>
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
        </p> */}

        {/* Class Action Suits Section */}
        {/* <h2 style={{ color: "#6D0B32" }}>Class Action Suits</h2>
        <p style={{ color: "#333", fontSize: "14px" }}>
          You acknowledge and confirm that you will not bring or participate in
          any class action or other class proceeding in connection with any
          dispute with SM. Further neither you nor SM agrees to class
          arbitration.
        </p> */}

        {/* General Section */}
        {/* <h2 style={{ color: "#6D0B32" }}>General</h2>
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
        <p>This website is proudly powered by The Dreamy Trails.</p>*/}
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
                All rights reserved. | Privacy Policy
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

export default TermsConditions;
