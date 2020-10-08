export interface Locale{
    system: {
        money: string,
    },
    success: {
        updateProfile: string
    },
    popup: {
        yesNo: {
            yes: string,
            no: string
        },
        message: {
            confirmLending: string,
        }

    },
    error: {
        OTP: {
            insuccessOTP: string,
            errServer: string,
        },
        numberPhone: {
            phoneBlank: string,
            loginIncorrect: string,
            invalidMobile: string,
            incorredPhoneFormat: string,

        },
        password: {
            passwordBlank: string,
            accountHasBeenRegistered: string,
            repeatPasswordDontMatch: string,
            passwordLessThan6Characters: string,
            passwordMoreThan32Characters: string,
            cantFindAccount: string,
        },
        server: {
            networkError: string,
            processError: string,
        },
        giftcode: {
            giftcodeBlank: string,
        },
        profile: {
            emptyName: string,
            emptyAddress: string,
            emptyIdNumber: string,
            emptyFrontIdCard: string,
            emptyBackIdCard: string,
            malformedIdNumber: string,
        }
    },
    screens: {
        dashboard: {
            dashboardTabName: string,
            chart: {
                title: string,
                totalAmount: string,
                lendingAmount: string,
                referralAmount: string,
            },
            finance: {
                total: string,
                lending: string,
                remaining: string,
                referral: string,
            },
            interestRateHistories: {
                remainDays: string,
                getButton: string,
                gotButton: string,
            }

        },
        lending: {
            lendingTabName: string,
            lendingTitle: string,
            chooseTitle:string,
            walletTitle: string,
        
            allButton: string,
            lendButton: string,
            lendingPackage: {
                minInvest: string,
                interestRate: string,
                matureIn: string,
                days: string,
            },
            lendingHistories: {
                amount: string,
            }
        },
        referral: {
            refTabName: string,
            refTitle: string,
            introText: string,
            copyButton: string,
            totalRefTitle: string,
            rewardRefTitle: string,
            refHistories: {
                earnedTitle: string,
            }
        },
        profile: {
            profileTitle: string,
            profileTabName: string,
            bankInfo: string,
            bid: string,
            bidHistories: string,
            coupon: string,
            logout: string,
        },
        editProfile: {
            //Label
            nameLabel: string,
            addressLabel: string,
            identityNumberLabel: string,
            frontIdCardLabel: string,
            backIdCardLabel: string,
            
            //Place Holder
            namePlaceholder: string,
            addressPlaceholder: string,
            idNumberPlaceholder: string,

            //Button
            updateButton: string,
            editButton: string,
            addPhotoButton: string,
        }, 
        bankInfo: {
            bankInfoTitle: string,
            bankNameLabel: string,
            bankNumberLabel: string,
            bankBranchLabel: string,

            bankNamePlaceHolder: string,
            bankNumberPlaceHolder: string,
            bankBranchPlaceHolder: string,

        },
        bidDetail: {
            bidderTitle: string,
            finish: string,
            bidWith: string,
            receive: string,
            receiveReward : string
        },
        listBidding: {
            tabName: {
                doingTabName: string,
                comingTabName: string,
            },
            winner: string,
            noOneHasWon: string,
            upcoming: string,
            happening: string,

            fewSecondsAgo: string,
            minuteAgo: string,
            hourAgo: string,
            dayAgo: string,


            


        },
        myBid: {
            tabName: {
                win: string,
                lose: string,
            }
        },
        coupon: {
            giftTitle: string,
            placeholderText: string,
            submitButton: string,
            couponHistories: {
                prize: string,
            }
        },
        login: {
            mobileInputPlaceholder: string,
            passwordInputPlaceholder: string,
            forgetPasswordText: string,
            loginButtonText: string,
            haventAccount: string,
            createAccount: string,
        },
        enterOTP: {
            enterOTPTitle: string,
            enterOTPInputPlaceholder: string,
            confirmButtonText: string,
            dontGetOTPCode: string,
            enterPhoneAgain: string,
        },
        enterYourPhone: {
            enterYourPhoneTitle: string,
            enterYourPhonePlaceholder: string,
            submitButtonText: string,
            backToLogIn: string,
        },
        enterYourPassword: {
            enterYourPasswordTitle: string,
            confirmPasswordPlaceHolder: string,
            showPassword: string,
        }
    }
}
