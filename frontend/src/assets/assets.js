import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import access_icon from './access_icon.png'
import efficiency_icon from './efficiency_icon.png'
import doctor_icon from './doctor_icon.png'
import personalized_icon from './personalized_icon.png'
import login_image from './login_image.jpg'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Cardiologist from './Cardiologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    access_icon,
    efficiency_icon,
    personalized_icon,
    doctor_icon,
    login_image
}

export const specialityData = [
    {
        speciality: 'General Physician',
        image: General_physician
    },
    {
        speciality: 'Cardiologist',
        image: Cardiologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatrician',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Richard James is a highly experienced general physician dedicated to providing holistic and patient-centered care. With a strong foundation in preventive medicine and early diagnosis, Dr. James emphasizes building long-term relationships with his patients. He believes in empowering individuals through education and actively involving them in their treatment plans. Whether managing chronic conditions or addressing acute illnesses, Dr. James brings compassion, precision, and integrity to every consultation.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Emily Larson',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Emily Larson is a compassionate and skilled gynecologist who provides comprehensive care to women at every stage of life. She has extensive experience in managing pregnancy, menstrual disorders, reproductive health, and menopause-related concerns. Known for her empathetic listening and patient advocacy, Dr. Larson creates a safe space for women to discuss sensitive issues openly. She integrates the latest medical advancements with a personalized approach to ensure every patient feels supported and confident in her care.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. John Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. John Patel is a dedicated dermatologist who specializes in both clinical and cosmetic skin treatments. He has a deep understanding of various skin conditions such as acne, eczema, psoriasis, and pigmentation disorders. Passionate about skin health, Dr. Patel also offers personalized skincare routines and advanced dermatological procedures. His friendly and detail-oriented manner makes him especially approachable to young adults and individuals new to dermatological care.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Lee',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Christopher Lee is a warm and energetic pediatrician committed to nurturing the health and development of children. From newborns to teenagers, he offers preventive care, vaccinations, growth monitoring, and treatment of childhood illnesses. Dr. Lee emphasizes open communication with both children and parents, making visits comfortable and informative. His patient and playful nature helps him build trust easily with young patients, fostering positive lifelong healthcare habits.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Jennifer Garcia is a board-certified neurologist specializing in the diagnosis and management of complex neurological disorders such as epilepsy, migraines, multiple sclerosis, and stroke. With a calm and reassuring approach, she helps patients navigate the challenges of chronic neurological conditions. She is committed to staying at the forefront of research and brings a blend of cutting-edge techniques and compassionate care to her practice. Her goal is to improve each patient’s quality of life through personalized treatment and support.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Williams',
        image: doc6,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Andrew Williams is a trusted gastroenterologist with a strong focus on digestive health and nutrition. He has a special interest in managing gastrointestinal conditions such as acid reflux, irritable bowel syndrome (IBS), liver disorders, and colorectal screenings. Dr. Williams emphasizes patient education and dietary guidance as a key part of treatment. Known for his thorough diagnostic skills and clear communication, he helps patients understand their conditions and make sustainable lifestyle changes.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Christopher Davis',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Christopher Davis provides comprehensive general medical care with an emphasis on personalized attention and preventive strategies. With years of experience treating a wide range of conditions, he is known for his patient-first approach and commitment to long-term wellness. Dr. Davis builds strong relationships with his patients by listening attentively, answering questions clearly, and involving them in decision-making. His practice combines clinical excellence with a deeply human touch.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Timothy White',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Timothy White is a dedicated gynecologist who focuses on creating a welcoming and supportive environment for women of all ages. He offers expert care in areas such as hormonal health, fertility support, prenatal care, and gynecological surgeries. Dr. White values clear communication and ensures every patient fully understands their options. His compassionate and respectful approach has earned him the trust of patients from diverse backgrounds.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ava Mitchell',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Ava Mitchell is an expert in skin health, offering both medical and aesthetic dermatology services. She is especially skilled in treating chronic conditions like rosacea and psoriasis, as well as performing skin rejuvenation treatments. Dr. Mitchell takes the time to understand her patients’ concerns and goals, creating customized treatment plans that restore skin health and confidence. Her gentle and encouraging manner makes her a favorite among patients of all ages.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeffrey King',
        image: doc10,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Jeffrey King is a knowledgeable and kind-hearted pediatrician known for his dedication to children’s health. He provides a wide range of services including newborn care, school check-ups, developmental assessments, and treatment of infections. Dr. King takes a collaborative approach with families, ensuring parents feel informed and empowered. His focus is not only on physical health but also emotional well-being, making him a trusted partner in a child’s growth journey.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoe Kelly',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Zoe Kelly is an experienced neurologist committed to delivering exceptional care for patients with conditions such as Alzheimer’s disease, Parkinson’s, seizures, and chronic headaches. She combines advanced diagnostics with a calm and thoughtful approach. Dr. Kelly believes that neurological care requires deep understanding and clear communication, which she practices in every consultation. Her patients value her dedication, empathy, and ability to explain complex conditions in an accessible way.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrick Harris',
        image: doc12,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Patrick Harris brings a wealth of experience in managing a broad range of gastrointestinal issues. His areas of expertise include inflammatory bowel disease (IBD), gallstones, liver disease, and endoscopic procedures. Dr. Harris is known for his careful attention to detail and for crafting care plans that align with each patient’s lifestyle and health goals. He emphasizes long-term management and works closely with nutritionists to ensure holistic digestive care.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Chloe Evans is a trusted general physician who offers patient-focused primary care services. She is experienced in chronic disease management, routine screenings, and lifestyle-based health strategies. Dr. Evans creates a warm and respectful environment where patients feel heard and valued. Her integrative approach combines clinical medicine with preventive care, helping patients achieve long-term physical and mental wellness.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Ryan Martinez is a skilled and caring gynecologist who provides a wide range of services from fertility assessments to menopause care. He is passionate about educating women on their reproductive health and helping them make informed decisions. Dr. Martinez is praised for his gentle demeanor and clear explanations, which ease patient anxiety and build trust. His evidence-based practice ensures high-quality care in every phase of a woman’s life.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Amelia Hill is a dermatologist who blends medical knowledge with aesthetic sensitivity. She is particularly experienced in managing acne, pigmentation disorders, and providing non-invasive cosmetic treatments such as chemical peels and skin resurfacing. Dr. Hill works closely with each patient to create tailored treatment plans that reflect both medical needs and personal goals. Her modern approach and attention to detail help patients look and feel their best.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]