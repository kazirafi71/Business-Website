import im1 from './Images/portfolio__1.jpg'
import im2 from './Images/portfolio__2.jpg';
import im3 from './Images/portfolio__3.jpg';
import im4 from './Images/portfolio__4.jpg';
import im5 from './Images/portfolio__5.jpg';
import im6 from './Images/portfolio__6.jpg';
import im7 from './Images/portfolio__7.jpg';
import im8 from './Images/portfolio__8.jpg';
import im9 from './Images/portfolio__9.jpg';
import post1 from './Images/post-3.jpg';
import post3 from './Images/post-5.jpg';
import post2 from './Images/post-6.jpg';
import post4 from './Images/post-10.jpg';
import post5 from './Images/post-13.jpg';
import post6 from './Images/post-7.jpg';
import post7 from './Images/post-8.jpg';
import ic1 from './Images/Group-2708.png'
import ic2 from './Images/Group-2705.png'
import ic3 from './Images/Group-2700.png'



const data=[
    {
        number:'1,000 +',
        title:'Projects'
    },
    {
        number:'500 +',
        title:'CLIENTS'
    },
    {
        number:'101 +',
        title:'AWARDS'
    },
    {
        number:'78 +',
        title:'BRANDS'
    }
]

const expData=[
    {
        time:'2000 - 2008 (UX Designer)',
        title:'Google Corporation.'
    },
    {
        time:'2008 - 2015 (UX Designer)',
        title:'Bruno Mars As.'
    },
    {
        time:'2015 - 2019 (UX Designer)',
        title:'AssGuards Limited.'
    },
    {
        time:'2015 - 2019 (UX Designer)',
        title:'Apple Product Co.'
    },
]

const skillData=[
    {
        title:'Project Management Admin Panel',
        img:im1
    },
    {
        title:'Project Management Admin Panel',
        img:im2
    },
    {
        title:'Project Management Admin Panel',
        img:im3
    },
    {
        title:'Project Management Admin Panel',
        img:im4
    },
    {
        title:'Project Management Admin Panel',
        img:im5
    },
    {
        title:'Project Management Admin Panel',
        img:im6
    },
    {
        title:'Project Management Admin Panel',
        img:im7
    },
    {
        title:'Project Management Admin Panel',
        img:im8
    },
    {
        title:'Project Management Admin Panel',
        img:im9
    }
    
]

const blogData=[
    {
        img:post1,

        title:'The Millionaire Guide On Portfolio To Help You Get Rich.',
        des:'It’s been quite a while since talked about our failures here. Since then, we’ve made some new mistakes but used each of them as an opportunity to grow and we would like to share with you the lessons we learned.'
    },
    {
        img:post3,

        title:'The Story Of Portfolio Has Just Gone Viral!',
        des:'It’s been quite a while since talked about our failures here. Since then, we’ve made some new mistakes but used each of them as an opportunity to grow and we would like to share with you the lessons we learned.'
    },
    {
        img:post2,

        title:'Here’s What Industry Insiders Say About Portfolio.',
        des:'It’s been quite a while since talked about our failures here. Since then, we’ve made some new mistakes but used each of them as an opportunity to grow and we would like to share with you the lessons we learned.'
    },
]

const socialData=[
    {
        icon:'fa fa-linkedin',
        title:'Linkeding',
        des:'Professional social profile'
    }
    ,{
        icon:'fa fa-twitter',
        title:'Twitter',
        des:'Random thoughts'
    },
    {
        icon:'fa fa-medium',
        title:'Medium',
        des:'Work case study'
    },
    {
        icon:'fa fa-instagram',
        title:'Instagram',
        des:'Image base social communications'
    },
    {
        icon:'fa fa-envelope',
        title:'Email',
        des:'hello@growth.digital'
    },
    {
        icon:'fa fa-dribbble',
        title:'Dribble',
        des:'Design work social profile'
    }
]

const cData=[
    {
        icon:'fa fa-envelope',
        title:'Email:',
        des1:'hello@growth.com',
        des2:'subash.ui.ux@gmail.com'
    },
    {
        icon:'fa fa-phone',
        title:'PHONE:',
        des1:'+ 64 3 477 4000',
        des2:'+ 64 3 477 4023'
    },
    {
        icon:'fa fa-address-book',
        title:'ADDRESS:',
        des1:'1600 Amphitheatre Parkway',
        des2:'Mountain View, Canada'
    }
]

const blData=[
    {
        img:post1,
        time:' MAY 27, 2019',
        title:'The Millionaire Guide On Portfolio To Help You Get Rich.',
        des:'It’s been quite a while since talked about our failures here. Since then, we’ve made some new mistakes but used each of them as an opportunity to grow and we...'
    },
    {
        img:post5,
        time:' MAY 27, 2019',
        title:'The Millionaire Guide On Portfolio To Help You Get Rich.',
        des:'It’s been quite a while since talked about our failures here. Since then, we’ve made some new mistakes but used each of them as an opportunity to grow and we...'
    },
    
    
    
    {
        img:post4,
        time:' MAY 27, 2019',
        title:'The Rank Of Portfolio In Consumer’s Market.',
        des:'It’s been quite a while since talked about our failures here. Since then, we’ve made some new mistakes but used each of them as an opportunity to grow and we...'
    },
    {
        img:post5,
        time:' MAY 27, 2019',
        title:'Reasons Why Portfolio Is Getting More Popular In The Past Decade.',
        des:'It’s been quite a while since talked about our failures here. Since then, we’ve made some new mistakes but used each of them as an opportunity to grow and we...'
    },
    {
        img:post6,
        time:' MAY 27, 2019',
        title:'The Seven Common Stereotypes When It Comes To Portfolio.',
        des:'It’s been quite a while since talked about our failures here. Since then, we’ve made some new mistakes but used each of them as an opportunity to grow and we...'
    },
    {
        img:post7,
        time:' MAY 27, 2019',
        title:'Here’s What Industry Insiders Say About Portfolio.',
        des:'It’s been quite a while since talked about our failures here. Since then, we’ve made some new mistakes but used each of them as an opportunity to grow and we...'
    },
    {
        img:post1,
        time:' MAY 27, 2019',
        title:'The Millionaire Guide On Portfolio To Help You Get Rich.',
        des:'It’s been quite a while since talked about our failures here. Since then, we’ve made some new mistakes but used each of them as an opportunity to grow and we...'
    },
    {
        img:post3,
        time:' MAY 27, 2019',
        title:'The Story Of Portfolio Has Just Gone Viral!',
        des:'It’s been quite a while since talked about our failures here. Since then, we’ve made some new mistakes but used each of them as an opportunity to grow and we would like to share with you the lessons we learned.'
    },
    {
        img:post2,
        time:' MAY 27, 2019',
        title:'Here’s What Industry Insiders Say About Portfolio.',
        des:'It’s been quite a while since talked about our failures here. Since then, we’ve made some new mistakes but used each of them as an opportunity to grow and we would like to share with you the lessons we learned.'
    },
]

const price=[
    {
        icon:ic1,
        title:'Personal',
        i1:'Lifetime Usage',
        i2:'3 Months Support & Updates',
        i3:'1 Website License',
        i4:'Quickstart Included',
        i5:'Access to Templates & Extensions',
        i6:'Branding/Copyright Removal',
        i7:'New Releases',
        p:'€ 199 / Month'
    },
    {
        icon:ic2,
        title:'Advance',
        i1:'Lifetime Usage',
        i2:'6 Months Support & Updates',
        i3:'1 Website License',
        i4:'Quickstart Included',
        i5:'Access to Templates & Extensions',
        i6:'Branding/Copyright Removal',
        i7:'New Releases',
        p:'€ 299 / Month'
    },
    {
        icon:ic3,
        title:'Platinum',
        i1:'Lifetime Usage',
        i2:'6 Months Support & Updates',
        i3:'1 Website License',
        i4:'Quickstart Included',
        i5:'Access to Templates & Extensions',
        i6:'Branding/Copyright Removal',
        i7:'New Releases',
        p:'€ 399 / Month'
    }
]



export default data;
export {expData,skillData,blogData,socialData,cData,blData,price}