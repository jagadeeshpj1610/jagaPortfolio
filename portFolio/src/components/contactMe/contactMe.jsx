
import "../contactMe/contactMe.css"
import email from "../../assets/email2.svg"

const ContactMe = () => {
  return (
    <>
      <h3 className="contactHeading">CONTACT ME</h3>
      <div className="contactContainer">
        <div className="contactMe">
          <div className="contactContent">
            <p>Feel Free to Connect, reach out to me on</p>
            <div className="emailSection">
              <img src={email} alt="" />
              <a href="mailto:jagadeeshpacjukra1610@gmail.com">jagadeeshpachikura1610@gmail.com</a>
            </div>
          </div>
          <div className="socilaLinks">
            <p style={{ textAlign: "center" }}>Want to know more?</p>
            <div className="socialIcons">
              <a href="https://github.com/jagadeeshpj1610">
                <svg fill="#a1a1a1" height="800px" width="800px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xmlSpace="preserve" stroke="#a1a1a1" className="icon"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g><path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M339,617c0,5.5-4.5,10-10,10h-432c-5.5,0-10-4.5-10-10V185c0-5.5,4.5-10,10-10h432c5.5,0,10,4.5,10,10V617z"></path><path d="M224.5,351.2c0.9-20.1-1.8-39.6-8.6-58.6c-0.9-2.4-2-3.3-4.5-2.6c-5.6,1.7-11.4,3-16.9,5c-15.2,5.5-29.1,13.5-42.6,22.2 c-1.4,0.9-3.5,1.5-5.2,1.2c-22.1-3.9-44.3-3.7-66.5-0.3c-2.2,0.3-5-0.2-6.8-1.3c-15.7-10.2-31.7-20.2-50-25 c-15.1-4-12-4.8-16.3,8.9c-5.1,16.4-7.1,33.4-6,50.6c0.1,1.2-0.8,2.7-1.6,3.8c-6.6,7.9-11.7,16.6-14.8,26.4c-6,19-4.8,38.2-1,57.3 c7.5,37.5,32.8,63.8,70.2,70.3c19.3,3.4,39.2,3.7,57.3,5.2c20.2-1.5,38.9-1.6,57.1-4.5c31.8-5.1,55.8-22,67.8-52.7 c4.2-10.7,6.5-22.4,7.9-33.8c3.1-25.2-1.2-48.8-18.4-68.7C225,353.8,224.5,352.4,224.5,351.2z M208.1,459.1 c-3.3,15.6-12.4,26.3-27.6,31.8c-14.7,5.4-29.9,7.6-45.4,8.6c-7.5,0.5-15,0.1-22.5,0.1c-20.2,0.4-40.4-0.4-59.9-6.2 c-24.5-7.3-35.5-21.9-36.2-47.5c-0.3-9.1,0.7-17.9,5-26.1c8.5-16.5,23.2-22.3,40.6-22.6c9.5-0.1,19.1,0.7,28.7,1.6 c20.1,1.8,40-0.1,60-1.2c8.8-0.5,17.8-0.7,26.4,0.8c18.5,3.2,32.5,21.6,32.8,42.3C210,446.8,209.3,453.1,208.1,459.1z"></path><path d="M56.1,424.8c-5.5,5.7-7.4,12.9-7.7,19.3c0,9.6,2.8,17.3,7.7,22.3c6.8,6.9,16.1,6.7,22.6-0.3c9.8-10.6,9.7-30.5,0-41 C72.2,418,62.7,417.9,56.1,424.8z"></path><path d="M148.2,424c-11.2,10.3-11.2,33,0,43.2c6.5,5.9,15.3,5.6,21.4-0.7c5.6-5.8,7.6-13.1,7.8-21c-0.2-7.9-2.2-15.1-7.9-20.9 C163.4,418.3,154.6,418.1,148.2,424z"></path></g></g></svg>
              </a>
              <a href="https://www.instagram.com/jagadeesh__1610/">
                <svg fill="#a3a3a3" height="800px" width="800px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xmlSpace="preserve" stroke="#a3a3a3" className="icon"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g><path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M339,617c0,5.5-4.5,10-10,10h-432c-5.5,0-10-4.5-10-10V185c0-5.5,4.5-10,10-10h432c5.5,0,10,4.5,10,10V617z"></path><path d="M191.6,273h-157c-27.3,0-49.5,22.2-49.5,49.5v52.3v104.8c0,27.3,22.2,49.5,49.5,49.5h157c27.3,0,49.5-22.2,49.5-49.5V374.7 v-52.3C241,295.2,218.8,273,191.6,273z M205.8,302.5h5.7v5.6v37.8l-43.3,0.1l-0.1-43.4L205.8,302.5z M76.5,374.7 c8.2-11.3,21.5-18.8,36.5-18.8s28.3,7.4,36.5,18.8c5.4,7.4,8.5,16.5,8.5,26.3c0,24.8-20.2,45.1-45.1,45.1C88,446.1,68,425.8,68,401 C68,391.2,71.2,382.1,76.5,374.7z M216.1,479.5c0,13.5-11,24.5-24.5,24.5h-157c-13.5,0-24.5-11-24.5-24.5V374.7h38.2 c-3.3,8.1-5.2,17-5.2,26.3c0,38.6,31.4,70,70,70c38.6,0,70-31.4,70-70c0-9.3-1.9-18.2-5.2-26.3h38.2V479.5z"></path></g></g></svg>
              </a>
              <a href="mailto:jagadeeshpacjukra1610@gmail.com">
                <svg width="800px" height="800px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" className="icon"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>mail-filled</title><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="mail-filled-white" fill="#a6a6a6" transform="translate(42.686667, 85.339333)"><path d="M3.55271368e-14,28.7 L213.333914,220.70134 L426.667,28.701 L426.667248,341.333608 L0.00058094128,341.333608 L3.55271368e-14,28.7 Z M394.776,1.42108547e-14 L213.333914,163.285608 L31.89,1.42108547e-14 L394.776,1.42108547e-14 Z" id="Combined-Shape"></path></g></g></g></svg>
              </a>
              <a href="www.linkedin.com/in/jagadeeshpj1610">
                <svg fill="#999999" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xmlSpace="preserve" width="179px" height="179px" className="icon"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g><path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M339,617c0,5.5-4.5,10-10,10h-432c-5.5,0-10-4.5-10-10V185c0-5.5,4.5-10,10-10h432c5.5,0,10,4.5,10,10V617z"></path><rect x="-8.5" y="348.4" width="49.9" height="159.7"></rect><path d="M177.7,346.9c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1 c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8C241,369.9,213.2,346.9,177.7,346.9z"></path><path d="M15.4,273c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7 C45.1,284.9,33.8,273,15.4,273z"></path></g></g></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ContactMe