import { Locale } from "./Locale"

const en: Locale = {
    success: {
        "updateProfile": "Update successful!"
    },
    popup: {
        yesNo: {
            "yes": "YES",
            "no": "NO"
        },
        message: {
            "confirmLending": "Are you sure want to lending?"
        }

    },
    error: {
        OTP: {
            "insuccessOTP": "OTP is insuccess",
            "errServer": "Error with server",
        },
        numberPhone: {
            "phoneBlank": "User must not be left blank",
            "loginIncorrect": "User or password is incorrect!",
            "invalidMobile": "Mobile is not valid",
            "incorredPhoneFormat": "Incorrect phone number format",

        },
        password: {
            "passwordBlank": "Password can not be left blank",
            "accountHasBeenRegistered": "Account has been registered",
            "repeatPasswordDontMatch": "Those passwords didn't match",
            "passwordLessThan6Characters": "Use 6 character or more for your password",
            "passwordMoreThan32Characters": "Use 6 to 32 characters",
            "cantFindAccount": "Can't find your account?",
        },
        server: {
            "networkError": "Network Error",
            "processError": "Have error when processing"
        },
        giftcode: {
            "giftcodeBlank": "Please enter giftcode!"
        },
        profile: {
            "emptyName": "Please enter your name!",
            "emptyAddress": "Please enter your address!",
            "emptyIdNumber": "Please enter your ID number!",
            "emptyFrontIdCard": "Please enter your front Id Card!",
            "emptyBackIdCard": "Please enter your back Id Card!",
            "malformedIdNumber": "Malformed ID Number!"
        }
    },
    screens: {
        dashboard: {
            "dashboardTabName": "Dashboard",
            chart: {
                "title": "Chart",
                "totalAmount": "Total Amount",
                "lendingAmount": "Lending Amount",
                "referralAmount": "Referral Amount",
            },
            finance: {
                "total": "Total",
                "lending": 'Lending',
                "remaining": "Remaining",
                "referral": "Referral",
            },
            interestRateHistories: {
                "remainDays": "days",
                "getButton": "get",
                "gotButton": "got",
            }

        },
        lending: {
            "lendingTabName": "Lending",
            "lendingTitle": "Lending",
            "chooseTitle": "Choose a package",
            "walletTitle": "Wallet",
            "coinInputLabel": "COIN",
            "allButton": "ALL",
            "lendButton": "LEND",
            lendingPackage: {
                "minInvest": "Min",
                "interestRate": "Interest rate",
                "matureIn": "Mature in",
            },
            lendingHistories: {
                "amount": "AMOUT",
            }
        },
        referral: {
            "refTabName": "Referral",
            "refTitle": "REFERRAL",
            "introText": "The Lending game referral program is a great way to read the word of this great service and to earn even more money with your friend! Refer friends and receive 1000 COIN of their earnings for life!",
            "copyButton": "Copy",
            "totalRefTitle": "Total",
            "rewardRefTitle": "Reward",
            refHistories: {
                "earnedTitle": "EARNED",
            }
        },
        profile: {
            "profileTitle": "PROFILE",
            "profileTabName": "Profile",
            "bankInfo": "Bank Info",
            "bid": "Bid",
            "bidHistories": "My Bid",
            "coupon": "Gift",
            "logout": "Logout",
        },
        editProfile: {
            //Label
            "nameLabel": "Name",
            "addressLabel": "Address",
            "identityNumberLabel": "Identity Number",
            "frontIdCardLabel":"Front ID Card",
            "backIdCardLabel":"Back ID Card",
            
            //Place Holder
            "namePlaceholder": "Enter your name",
            "addressPlaceholder": "Enter your address",
            "idNumberPlaceholder": "Enter ID Number",

            //Button
            "updateButton": "UPDATE",
            "editButton": "Edit",
            "addPhotoButton": "Add Photo",
        }, 
        bankInfo: {
            "bankInfoTitle": "BANK INFORMATION",
            "bankNameLabel": "Bank Name",
            "bankNumberLabel": "Number Bank",
            "bankBranchLabel": "Branch",

            "bankNamePlaceHolder": "Enter bank name",
            "bankNumberPlaceHolder": "Enter bank number",
            "bankBranchPlaceHolder": "Enter bank branch",

        },
        bidDetail: {
            "bidderTitle": "Bidder",
            "finish": "Finish",
            "bidWith": "Bid with",
            "revice" : "Received at",
            "receiveReward" : "Receive reward"
        },
        listBidding: {
            tabName: {
                "doingTabName": "DOING",
                "comingTabName": "COMING",
            },
            "winner": "Winner",
            "noOneHasWon": "No one has won yet",
            "upcoming": "Upcoming",
            "happening": "Happening",

            "fewSecondsAgo": "Few seconds ago",
            "minuteAgo": "minute ago",
            "hourAgo": "hour ago",
            "dayAgo": "day ago"


            


        },
        myBid: {
            tabName: {
                "win": "Win bid",
                "lose": "Lose bid"
            }
        },
        coupon: {
            "giftTitle": "Enter the Giftcode",
            "placeholderText": "Enter giftcode",
            "submitButton": "SUBMIT",
            couponHistories: {
                "prize": "PRIZE",
            }
        },
        login: {
            "mobileInputPlaceholder": "Mobile",
            "passwordInputPlaceholder": "Password",
            "forgetPasswordText": "Forgotten password?",
            "loginButtonText": "LOG IN",
            "haventAccount": "You haven't account?",
            "createAccount": "Create an account",
        },
        enterOTP: {
            "enterOTPTitle": "Enter OTP code",
            "enterOTPInputPlaceholder": "Enter OTP",
            "confirmButtonText": "Confirm",
            "dontGetOTPCode": "Didn't get a code?",
            "enterPhoneAgain": "Enter my phone again",
        },
        enterYourPhone: {
            "enterYourPhoneTitle": "Enter your phone",
            "enterYourPhonePlaceholder": "Enter your phone",
            "submitButtonText": "Submit",
            "backToLogIn": "Back to Log In",
        },
        enterYourPassword: {
            "enterYourPasswordTitle": "Enter your password",
            "confirmPasswordPlaceHolder": "Confirm password",
            "showPassword": "Show password",
        }
    }
}

export default en;