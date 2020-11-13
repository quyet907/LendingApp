import { Locale } from "./Locale";

const vi: Locale = {
    system: {
        money: "XU",
    },
    success: {
        updateProfile: "Cập nhật thành công!",
    },
    popup: {
        yesNo: {
            yes: "ĐỒNG Ý",
            no: "KHÔNG"
        },
        message: {
            confirmLending: "Bạn chắc chắn muốn cho vay?",
            receiveAfter24h: "Bạn sẽ nhận được phần thưởng trong 24h với thông tin ngân hàng đã đăng ký, mọi thắc mắc liên hệ: 0974798791.",
            deduction: "Khi nhận thưởng, giá tiền còn lại sẽ được trừ vào số tiền trong ví. Bạn có chắc chắn muốn nhận thưởng ngay bây giờ không?"
        },
        uploading: {
            text: "Đang tải lên"
        },



    },
    error: {
        profile: {
            emptyName: "Vui lòng nhập họ tên!",
            emptyAddress: "Vui lòng nhập địa chỉ!",
            emptyIdNumber: "Vui lòng nhập số CMND!",
            emptyFrontIdCard: "Vui lòng cập nhật CMND mặt trước!",
            emptyBackIdCard: "Vui lòng cập nhật CMND mặt sau!",
            malformedIdNumber: "Số CMND không đúng định dạng!"
        },
        OTP: {
            insuccessOTP: "Xác nhận OTP không thành công",
            errServer: "Lỗi server",
        },
        numberPhone: {
            phoneBlank: "Tên đăng nhập không được để trống",
            loginIncorrect: "Tên đăng nhập hoặc mật khẩu không đúng!",
            invalidMobile: "Số điện thoại không hợp lệ",
            incorredPhoneFormat: "Số điện thoại không đúng định dạng",

        },
        password: {
            passwordBlank: "Mật khẩu không được để trống",
            accountHasBeenRegistered: "Tài khoản đã được đăng ký",
            repeatPasswordDontMatch: "Mật khẩu không khớp",
            passwordLessThan6Characters: "Mật khẩu gồm tối thiểu 6 ký tự",
            passwordMoreThan32Characters: "Mật khẩu chỉ từ 6 đến 32 ký tự",
            cantFindAccount: "Bạn không tìm được tài khoản?",
        },
        server: {
            networkError: "Lỗi mạng",
            processError: "Lỗi trong quá trình xử lý"
        },
        giftcode: {
            giftcodeBlank: "Vui lòng nhập mã quà tặng!"
        }

    },
    screens: {
        bankInfo: {
            bankInfoTitle: "TÀI KHOẢN NGÂN HÀNG",
            bankNameLabel: "Tên ngân hàng",
            bankNumberLabel: "Số tài khoản",
            bankBranchLabel: "Chi nhánh",

            bankNamePlaceHolder: "Nhập tên ngân hàng",
            bankNumberPlaceHolder: "Nhập số tài khoản",
            bankBranchPlaceHolder: "Nhập chi nhánh",
        },
        editProfile: {
            nameLabel: "Họ tên",
            addressLabel: "Địa chỉ",
            identityNumberLabel: "Số CMND",
            frontIdCardLabel: "CMND mặt trước",
            backIdCardLabel: "CMND mặt sau",

            //Place Holder
            namePlaceholder: "Nhập họ tên",
            addressPlaceholder: "Nhập địa chỉ",
            idNumberPlaceholder: "Nhập số CMND",

            //Button
            updateButton: "CẬP NHẬT",
            editButton: "Sửa",
            addPhotoButton: "Thêm ảnh",
        },
        dashboard: {
            dashboardTabName: "Bảng điều khiển",
            chart: {
                title: "Biểu đồ",
                totalAmount: "Tổng số tiền",
                lendingAmount: "Tiền cho vay",
                referralAmount: "Tiền giới thiệu",
            },
            finance: {
                total: "Tổng",
                lending: 'Cho vay',
                remaining: "Còn lại",
                referral: "Giới thiệu",
            },
            interestRateHistories: {
                remainDays: "Ngày",
                getButton: "get",
                gotButton: "got",
            }
        },
        lending: {
            lendingTabName: "Cho vay",
            lendingTitle: "CHO VAY ",
            chooseTitle: "Chọn gói",
            walletTitle: "Ví",
            allButton: "TẤT CẢ",
            lendButton: "CHO VAY",
            lendingPackage: {
                minInvest: "Tối thiểu",
                interestRate: "Lãi suất",
                matureIn: "Đến hạn",
                days: "d",
            },
            lendingHistories: {
                amount: "SỐ TIỀN",
            }
        },
        referral: {
            refTabName: "Giới thiệu",
            refTitle: "GIỚI THIỆU",
            introText: "Hãy sử dụng tính năng Giới thiệu bạn bè để tăng số tiền trong tài khoản. Mỗi lượt Giới thiệu sẽ mang lại 50.000 vào tài khoản và nhận Hoa hồng suốt đời.",
            copyButton: "Sao chép",
            copyNotification: "Đã sao chép!",
            totalRefTitle: "Tổng",
            rewardRefTitle: "Thưởng",
            refHistories: {
                earnedTitle: "ĐÃ KIẾM ĐƯỢC",
            }
        },
        profile: {
            profileTabName: "Hồ sơ",
            profileTitle: "HỒ SƠ",
            bid: "Đấu giá",
            bidHistories: "Đấu giá của tôi",
            coupon: "Quà tặng",
            logout: "Đăng xuất",
            bankInfo: "Tài khoản ngân hàng",
        },
        bidDetail: {
            bidderTitle: "Người đấu giá",
            finish: "Kết thúc",
            bidWith: "Đặt cược với",
            receive : "Đã nhận lúc",
            receiveReward : "Nhận thưởng"
        },
        listBidding: {
            winner: "Winner",
            noOneHasWon: "Đang diễn ra",
            upcoming: "Sắp diễn ra",
            happening: "Đang diễn ra",

            fewSecondsAgo: "giây trước",
            minuteAgo: "phút trước",
            hourAgo: "giờ trước",
            dayAgo: "ngày trước",
            tabName: {
                doingTabName: "Đang diễn ra",
                comingTabName: "SẮP TỚI",
            }
        },
        myBid: {
            tabName: {
                win: "Thắng đấu giá",
                lose: "Thua đấu giá"
            }
        },
        coupon: {
            giftTitle: "Quà tặng",
            placeholderText: "Nhập mã quà tặng",
            submitButton: "GỬI",
            couponHistories: {
                prize: "Phần thưởng",
            }
        },
        login: {
            mobileInputPlaceholder: "Số điện thoại",
            passwordInputPlaceholder: "Mật khẩu",
            forgetPasswordText: "Quên mật khẩu?",
            loginButtonText: "ĐĂNG NHẬP",
            haventAccount: "Bạn chưa có tài khoản?",
            createAccount: "Tạo tài khoản",
        },
        enterOTP: {
            enterOTPTitle: "Nhập mã OTP",
            enterOTPInputPlaceholder: "Nhập OTP",
            confirmButtonText: "Xác nhận",
            dontGetOTPCode: "Không nhận được mã?",
            enterPhoneAgain: "Nhập lại số điện thoại",
        },
        enterYourPhone: {
            enterYourPhoneTitle: "Nhập số điện thoại",
            enterYourPhonePlaceholder: "Nhập số điện thoại",
            submitButtonText: "Gửi",
            backToLogIn: "Đăng nhập lại",
        },
        enterYourPassword: {
            enterYourPasswordTitle: "Nhập mật khẩu",
            confirmPasswordPlaceHolder: "Xác nhận mật khẩu",
            showPassword: "Xem mật khẩu",
        }
    }
}

export default vi;