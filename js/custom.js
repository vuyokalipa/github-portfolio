$(document).ready(function() {
    let currentPath = window.location.pathname;

    if (localStorage.getItem('loginStatus') !== null) {
        $('#dashboard-link').removeClass('nav-item ats-hidden').addClass('nav-item ats-show')
        $('#signin-link').removeClass('nav-item ats-show').addClass('nav-item ats-hidden')
        $('#signout-link').removeClass('nav-item ats-hidden').addClass('nav-item ats-show')
    } else {
        $('#dashboard-link').removeClass('nav-item ats-show').addClass('nav-item ats-hidden')
        $('#signin-link').removeClass('nav-item ats-hidden').addClass('nav-item ats-show')
        $('#signout-link').removeClass('nav-item ats-show').addClass('nav-item ats-hidden')
    }

    switch(currentPath) {
        case "/":
            loadProfileImage();

            // TOP MENUBAR
            $('#link-home').removeClass('nav-link ats-bold-text').addClass('nav-link active ats-bold-text')
            $('#link-services').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-portfolio').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-about').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-contact').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-signin').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-dashboard').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')

            launchWhatsappMessenger();

            $('#message-type').val("Message");
            break;
        case "/services":
            loadProfileImage();

            // TOP MENUBAR
            $('#link-home').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-services').removeClass('nav-link ats-bold-text').addClass('nav-link active ats-bold-text')
            $('#link-portfolio').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-about').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-contact').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-signin').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-dashboard').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')

            $('#message-type').val("Service Enquiry");

            launchWhatsappMessenger();
            break;
        case "/portfolio":
            loadProfileImage();

            // TOP MENUBAR
            $('#link-home').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-services').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-portfolio').removeClass('nav-link ats-bold-text').addClass('nav-link active ats-bold-text')
            $('#link-about').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-contact').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-signin').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-dashboard').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            break;
        case "/contact":
            loadProfileImage();

            // TOP MENUBAR
            $('#link-home').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-services').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-portfolio').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-about').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-contact').removeClass('nav-link ats-bold-text').addClass('nav-link active ats-bold-text')
            $('#link-signin').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-dashboard').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')

            launchWhatsappMessenger();

            $('#message-type').val("Message");
            break;
        case "/dashboard":
            loadProfileImage();

            // TOP MENUBAR
            $('#link-home').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-services').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-portfolio').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-about').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-contact').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-signin').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-dashboard').removeClass('nav-link ats-bold-text').addClass('nav-link active ats-bold-text')
            break;
        case "/reset-confirm":
            loadProfileImage();

            const uname = localStorage.getItem('username');
            appendVerificationCodeAlert(uname);
            appendCancelPasswordResetAlert(uname);
            break;
        case "/signout":
            loadProfileImage();

            signout();
            break;
        default:
            loadProfileImage();

            // TOP MENUBAR
            $('#link-home').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-services').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-portfolio').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-about').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-contact').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-signin').removeClass('nav-link active ats-bold-text').addClass('nav-link ats-bold-text')
            $('#link-dashboard').removeClass('nav-link active ats-bold-text').addClass('nav-link active ats-bold-text')
        }
    
});

const isMobile = () => {
    var check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}

const launchWhatsappMessenger = () => {
    let apiLink = 'https://';
    apiLink += isMobile() ? 'api' : 'web';
    apiLink += '.whatsapp.com/send?phone=27814411187&text=&source=&data=';
    const hrefLink = document.getElementById("whatsappButton");
    hrefLink.setAttribute("href", apiLink);
}

const loadProfileImage = () => {
    if (localStorage.getItem("loginStatus") == "active") {
        let profileImage = "/assets/images/uploads/";
        let profileName = "";

        let localProfileImage = localStorage.getItem("profileImage");
        let localProfileName = localStorage.getItem("profileName");

        if (localProfileImage != null) {
            profileImage += localProfileImage;
            profileName =  localProfileName;
        } else {
            profileImage += "avatar.webp";
            profileName = "avatar";
        }

        document.getElementById("profileImage").setAttribute("src", profileImage);
        document.getElementById("profileImage").setAttribute("alt", profileName);
    }
}

const loadProfileDashboard = () => {
    if (localStorage.getItem("loginStatus") == "active" && $('#cPage').val() !== "dashboard") {
        const pImage = localStorage.getItem("profileImage");

        // && pImage !== "avatar.webp"

        if (pImage != null) {
            window.location.href = "/dashboard";
        }
    }
}

const appendAlert = (message, type) => {
    const alertPlaceholder = document.getElementById('alertMessage')
    const wrapper = document.createElement('div')

    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)

}

const appendVerificationCodeAlert = (username) => {
    const alertPlaceholder = document.getElementById('alertMessage')
    const wrapper = document.createElement('div')

    wrapper.innerHTML = [
        '<div class="alert alert-light alert-dismissible" role="alert">',
        '    <div class="row">',
        '        <div class="col-sm-12 col-md-4 col-lg-4">',
        `           <button class="w-100 btn ats-danger-bg-color ats-white-text btn-sm" type="button" onclick=resendVerificationCode('${username}')>Resend Verification Code</button>`,
        '        </div>',
        '       <div class="col-sm-12 col-md-4 col-lg-4">',
        '   </div>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

const appendCancelPasswordResetAlert = (username) => {
    const alertPlaceholder = document.getElementById('alertMessage')
    const wrapper = document.createElement('div')

    wrapper.innerHTML = [
        '<div class="alert alert-light alert-dismissible" role="alert">',
        '    <div class="row">',
        '        <div class="col-sm-12 col-md-4 col-lg-4">',
        `           <button class="w-100 btn ats-danger-bg-color ats-white-text btn-sm" type="button" onclick=cancelPasswordReset('${username}')>Did Not Request Password Reset!</button>`,
        '        </div>',
        '       <div class="col-sm-12 col-md-4 col-lg-4">',
        '   </div>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

const handlePasswordToggle = (type) => {
    var passwordId = "";
    var passwordToggle = "";

    if (type === "password") {
        passwordId = document.getElementById('password');
        passwordToggle = document.getElementById('passwordToggle');
    
        if (passwordId.type === "password") {
            passwordId.type = "text";
            passwordToggle.innerHTML='<i class="fa fa-eye"></i>'
        } else {
            passwordId.type = "password";
            passwordToggle.innerHTML='<i class="fa fa-eye-slash"></i>'
        }
    } else {
        passwordId = document.getElementById('rePassword');
        passwordToggle = document.getElementById('rePasswordToggle');
    
        if (passwordId.type === "password") {
            passwordId.type = "text";
            passwordToggle.innerHTML='<i class="fa fa-eye"></i>'
        } else {
            passwordId.type = "password";
            passwordToggle.innerHTML='<i class="fa fa-eye-slash"></i>'
        }
    }

}

// CONTACT
function contactFormValidate(firstname, lastname, email, tel, contactMessage) {
    $('#errorFirstname').removeClass('ats-show ats-danger-text').addClass('ats-hidden');
    $('#errorLastname').removeClass('ats-show ats-danger-text').addClass('ats-hidden');
    $('#errorEmail').removeClass('ats-show ats-danger-text').addClass('ats-hidden');
    $('#errorTel').removeClass('ats-show ats-danger-text').addClass('ats-hidden');
    $('#errorContactMessage').removeClass('ats-show ats-danger-text').addClass('ats-hidden');

    let result = false;

    if (firstname && lastname && email && tel && contactMessage) {
        result = true;
    } else {
        if (firstname === '') {
            $('#errorFirstname').removeClass('ats-hidden').addClass('ats-show ats-danger-text');
        }

        if (lastname === '') {
            $('#errorLastname').removeClass('ats-hidden').addClass('ats-show ats-danger-text');
        }

        if (email === '') {
            $('#errorEmail').removeClass('ats-hidden').addClass('ats-show ats-danger-text');
        }

        if (tel === '') {
            $('#errorTel').removeClass('ats-hidden').addClass('ats-show ats-danger-text');
        }

        if (contactMessage === '') {
            $('#errorContactMessage').removeClass('ats-hidden').addClass('ats-show ats-danger-text');
        }
    }

    return result;
}

const handleContactFormSubmit = (e) => {
    const firstname = $('#firstname').val();
    const lastname = $('#lastname').val();
    const email = $('#email').val();
    const tel = $('#tel').val();
    const contactMessage = $('#contactMessage').val();

    if (contactFormValidate(firstname, lastname, email, tel, contactMessage)) {
        const recipient = "messages@avaytech.co.za";
        const subject = "Github Portfolio - Customer Enquiry";
        
        let body = "Name: " + firstname + " " + lastname;
        body += "\nEmail Address: " + email; 
        body += "\nTel: " + tel; 
        body += "\nMessage:\n" + contactMessage; 
    
        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;

        appendAlert("Successfully sent message!", 'success');
    } else {
        appendAlert("There are errors in your form", 'danger');
    }
}

// SIGNUP
function signupFormValidate(email, password, firstname, lastname, tel) {
    $('#errorEmail').removeClass('ats-show ats-danger-text').addClass('ats-hidden');
    $('#errorPassword').removeClass('ats-show ats-danger-text').addClass('ats-hidden');
    $('#errorFirstname').removeClass('ats-show ats-danger-text').addClass('ats-hidden');
    $('#errorLastname').removeClass('ats-show ats-danger-text').addClass('ats-hidden');
    $('#errorTel').removeClass('ats-show ats-danger-text').addClass('ats-hidden');

    let result = false;

    if (email && password && firstname && lastname && tel) {
        result = true;
    } else {
        if (email === '') {
            $('#errorEmail').removeClass('ats-hidden').addClass('ats-show ats-danger-text');
        }

        if (password === '') {
            $('#errorPassword').removeClass('ats-hidden').addClass('ats-show ats-danger-text');
        }

        if (firstname === '') {
            $('#errorFirstname').removeClass('ats-hidden').addClass('ats-show ats-danger-text');
        }

        if (lastname === '') {
            $('#errorLastname').removeClass('ats-hidden').addClass('ats-show ats-danger-text');
        }

        if (tel === '') {
            $('#errorTel').removeClass('ats-hidden').addClass('ats-show ats-danger-text');
        }
    }

    return result;
}

const handleSignupFormSubmit = (e) => {
    const email = $('#email').val();
    const password = $('#password').val();
    const firstname = $('#firstname').val();
    const lastname = $('#lastname').val();
    const tel = $('#tel').val();

    if (signupFormValidate(email, password, firstname, lastname, tel)) {
        const url = "/signup";
        const data = {
            username: email,
            password: password,
            firstname: firstname,
            lastname: lastname,
            tel: tel,
        }

        axios.post(url, data)
        .then(res => {
            const responseData = res.data

            if (responseData.Status === 200) {
                window.location.href = "/signin"
            } else {
                appendAlert(responseData.Message, 'danger');
            }
        }).catch(function(error) {
            console.log('Axios POST Error:', error);
            appendAlert(error, 'danger');
        })
    }
}

// SIGNIN
function signinFormValidate(email, password, verificationCode) {
    $('#errorEmail').removeClass('ats-show ats-danger-text').addClass('ats-hidden');
    $('#errorPassword').removeClass('ats-show ats-danger-text').addClass('ats-hidden');
    $('#errorVerificationCode').removeClass('ats-show ats-danger-text').addClass('ats-hidden');

    let result = false;

    if (email && password || verificationCode) {
        result = true;
    } else {
        if (email === '') {
            $('#errorEmail').removeClass('ats-hidden').addClass('ats-show ats-danger-text');
        }

        if (password === '') {
            $('#errorPassword').removeClass('ats-hidden').addClass('ats-show ats-danger-text');
        }

        if (verificationCode === '') {
            $('#errorVerificationCode').removeClass('ats-hidden').addClass('ats-show ats-danger-text');
        }
    }

    return result;
}

const handleSigninFormSubmit = (e) => {
    const email = $('#email').val();
    const password = $('#password').val();
    const verificationCode = $('#verificationCode').val();

    if (signinFormValidate(email, password)) {
        const url = "/signin";
        const data = {
            username: email,
            password: password,
            verificationCode: verificationCode,
        }

        axios.post(url, data)
        .then(res => {
            const responseData = res.data

            switch (responseData.Status) {
                case 200: // 200  Success - Read DB
                case 210:
                    localStorage.setItem('loginStatus', "active");
                    window.location.href = "/dashboard";
                    return
                case 150: // 150  Account Pending - Password not reset
                    localStorage.setItem('username', email);
                    window.location.href = "/reset-confirm";
                    return
                case 140: // 140  Account Pending - Email not verified
                    appendAlert(responseData.Message, 'warning');
                    appendVerificationCodeAlert(email);
                    $('#verificationCodeDiv').removeClass('ats-hidden').addClass('ats-show');
                  break;
                case 120: // 120  Verification Code Incorrect
                    appendAlert(responseData.Message, 'danger');
                    break;
                default:
                  appendAlert(responseData.Message, 'danger');
              }
    
                // if (responseData.Status === 120) {
                //     appendAlert(responseData.Message, 'primary');
                // }
            }).catch(function(error) {
            console.log('Axios POST Error:', error);
            appendAlert(error, 'dark');
        })
    }
}

// PASSWORD RESET REQUEST
function resetRequestFormValidate(email) {
    $('#errorEmail').removeClass('ats-show ats-danger-text').addClass('ats-hidden');

    let result = false;

    if (email) {
        result = true;
    } else {
        if (email === '') {
            $('#errorEmail').removeClass('ats-hidden').addClass('ats-show ats-danger-text');
        }
    }

    return result;
}

const handleResetRequestFormSubmit = (e) => {
    const email = $('#email').val();
    const password = $('#password').val();
    const verificationCode = $('#verificationCode').val();

    if (resetRequestFormValidate(email, password)) {
        const url = "/reset-request";
        const data = {
            username: email,
        }

        axios.post(url, data)
        .then(res => {
            const responseData = res.data

            if (responseData.Status === 200) {
                window.location.href = "/signin"
                return
            } else {
                appendAlert(responseData.Message, 'danger');
            }
            }).catch(function(error) {
            console.log('Axios POST Error:', error);
            appendAlert(error, 'dark');
        })
    }
}

// PASSWORD RESET CONFIRM
function resetConfirmFormValidate(password, rePassword, verificationCode) {
    $('#errorPassword').removeClass('ats-show ats-danger-text').addClass('ats-hidden');
    $('#errorRePassword').removeClass('ats-show ats-danger-text').addClass('ats-hidden');
    $('#errorVerificationCode').removeClass('ats-show ats-danger-text').addClass('ats-hidden');

    let result = false;

    if (password && rePassword && verificationCode) {
        result = true;
    } else {
        if (password === '') {
            $('#errorPassword').removeClass('ats-hidden').addClass('ats-show ats-danger-text');
        }

        if (rePassword === '') {
            $('#errorRePassword').removeClass('ats-hidden').addClass('ats-show ats-danger-text');
        }

        if (verificationCode === '') {
            $('#errorVerificationCode').removeClass('ats-hidden').addClass('ats-show ats-danger-text');
        }
    }

    return result;
}

const handleResetConfirmFormSubmit = (e) => {
    const password = $('#password').val();
    const rePassword = $('#rePassword').val();
    const verificationCode = $('#verificationCode').val();

    if (resetConfirmFormValidate(password, rePassword, verificationCode)) {
        const url = "/reset-confirm";
        const data = {
            password: password,
            verificationCode: verificationCode,
        }

        axios.post(url, data)
        .then(res => {
            const responseData = res.data

            if (responseData.Status === 200) {
                window.location.href = "/signin"
                return
            } else {
                appendAlert(responseData.Message, 'danger');
            }
            }).catch(function(error) {
            console.log('Axios POST Error:', error);
            appendAlert(error, 'dark');
        })
    }
}

// RESEND/CANCEL RESEND VERIFICATION CODE
const resendVerificationCode = async (username) => {
    const url = "/resend-code";
    const data = {
      username: username,
    }

    let responseData = ""

    await axios.post(url, data)
    .then(res => {
        responseData = res.data

        if (responseData !== "" && responseData.Status === '200') {
            appendAlert(responseData.Message, 'success');
        } else {
            appendAlert(responseData.Message, 'danger');
        }
    }).catch(function(error) {
        console.log('Axios POST Error:', error);
        appendAlert(error, 'danger');
    })  
};

const cancelPasswordReset = (username) => {
    const url = "/cancel-resend-code";
    const data = {
      username: username,
    }

    let responseData = ""

    axios.post(url, data)
    .then(res => {
        // responseData = res.data

        window.location.href = "/signin"
        return
    }).catch(function(error) {
        console.log('Axios POST Error:', error);
        appendAlert(error, 'danger');
    })  
};

// SIGNOUT
const userSignout = (e) => {
    const url = "/signout";

    axios.post(url, { withCredentials: true })
    .then(res => {
        const responseData = res.data;

        if (responseData.Status === 200) {
            localStorage.clear();
        } else {
            appendAlert(responseData.Message, 'warning');
        }

        window.location.href = "/signin"

    }).catch(function(error) {
        console.log('Axios POST Error:', error);
        // appendAlert(error, 'danger');
    })

}

// const signout = (e) => {
//     const url = "/signout-final";

//     axios.get(url, { withCredentials: true })
//     .then(res => {
//         const responseData = res.data;

//         if (responseData.Status === 200) {
//             localStorage.clear();
//             window.location.href = "/signin"
//         } else {
//             appendAlert(responseData.Message, 'warning');
//         }
//         }).catch(function(error) {
//         console.log('Axios POST Error:', error);
//         appendAlert(error, 'danger');
//     })

// }

// SOCIAL LOGIN
const loadSocialLogin = (socialAccount) => {
    alert(socialAccount);
}


// // DASHBOARD
// const dashboard = (e) => {
//     const url = "/dashboard-details";

//     axios.get(url, { withCredentials: true })
//     .then(res => {
//         const responseData = res.data;

//         if (responseData.Status === 200) {



//         } else {
//             alert("2");
//             appendAlert(responseData.Message, 'warning');
//         }
//         }).catch(function(error) {
//         console.log('Axios POST Error:', error);
//         appendAlert(error, 'danger');
//     })

// }
