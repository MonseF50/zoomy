
$(window).on('scroll', function () {
    if (window.scrollY > 250) {
        $('.newNav').addClass('nav-bar-top ')
    } else {
        $('.newNav').removeClass('nav-bar-top ')
    }
})


// // event to oepen and close dropdown in navbar in larg screen
// $('.nav-link').on('click', function (e) {
//     e.preventDefault()
//     $(this).next('ul').slideToggle(800, 'linear');
//     const currentList = $(this).next('ul');
//     console.log(currentList);
//     $('.navLinkList').not(currentList).slideUp(100)
//     $('.navLinkList li').on('click', function () {
//         currentList.slideUp(700)
//     })
// })

// event to open and close mobile navbar
// $('.navbar-icon-mobile').on('click', () => {
//     let mobileNavbarIsOpen = false
//     if (mobileNavbarIsOpen === false) {
//         $('.nav-mobile').animate({ right: '0px' }, 400)
//         mobileNavbarIsOpen = true
//     }
//     else {
//         $('.nav-mobile').animate({ right: '-350px' }, 400)
//         mobileNavbarIsOpen = false
//     }
//     $('.close-icon').on('click', () => {
//         $('.nav-mobile').animate({ right: '-350px' }, 400)
//         mobileNavbarIsOpen = false
//     })

// })
// event to oepen and close dropdown in navbar  in mobile

// $('.mobile-nav-link').on('click', function (e) {
//     e.preventDefault()
//     $(this).next('ul').slideToggle(300, 'linear');
//     const currentList = $(this).next('ul');
//     console.log(currentList);
//     $('.navLinkList').not(currentList).slideUp(300)
//     $('.navLinkList li').on('click', function () {
//         currentList.slideUp(300)
//     })
// })