const { MessageEmbed } = require("discord.js");
var stringSimilarity = require("string-similarity");

const depdata = [
    {
      Name: "Academic Affairs Office",
      ContactInfo: "856-256-4011",
      SearchRowan: "https://search.rowan.edu/?q=Academic+Affairs+Office"
    },
    {
      Name: "Academic Success Center",
      ContactInfo: "856-256-4259",
      SearchRowan: "https://search.rowan.edu/?q=Academic+Success+Center"
    },
    {
      Name: "Academic Transition Programs",
      ContactInfo: "856-256-5655",
      SearchRowan: "https://search.rowan.edu/?q=Academic+Transition+Programs"
    },
    {
      Name: "Accounting & Finance",
      ContactInfo: "856-256-4028",
      SearchRowan: "https://search.rowan.edu/?q=Accounting+&+Finance"
    },
    {
      Name: "Accounts Payable",
      ContactInfo: "856-256-4115",
      SearchRowan: "https://search.rowan.edu/?q=Accounts+Payable"
    },
    {
      Name: "Admissions Office",
      ContactInfo: "856-256-4200",
      SearchRowan: "https://search.rowan.edu/?q=Admissions+Office"
    },
    {
      Name: "AFT",
      ContactInfo: "856-256-4511",
      SearchRowan: "https://search.rowan.edu/?q=AFT"
    },
    {
      Name: "Alumni Relations",
      ContactInfo: "856-256-5400",
      SearchRowan: "https://search.rowan.edu/?q=Alumni+Relations"
    },
    {
      Name: "Art",
      ContactInfo: "856-256-4020",
      SearchRowan: "https://search.rowan.edu/?q=Art"
    },
    {
      Name: "Art Gallery",
      ContactInfo: "856-256-4521",
      SearchRowan: "https://search.rowan.edu/?q=Art+Gallery"
    },
    {
      Name: "Assessment & Learning Center",
      ContactInfo: "856-256-4512",
      SearchRowan: "https://search.rowan.edu/?q=Assessment+&+Learning+Center"
    },
    {
      Name: "Athletics",
      ContactInfo: "856-256-4686",
      SearchRowan: "https://search.rowan.edu/?q=Athletics"
    },
    {
      Name: "Biological Sciences",
      ContactInfo: "856-256-4833",
      SearchRowan: "https://search.rowan.edu/?q=Biological+Sciences"
    },
    {
      Name: "Bookstore - Barnes & Noble",
      ContactInfo: "856-881-5960",
      SearchRowan: "https://search.rowan.edu/?q=Bookstore+-+Barnes+&+Noble"
    },
    {
      Name: "Box Office - Wilson",
      ContactInfo: "856-256-4545",
      SearchRowan: "https://search.rowan.edu/?q=Box+Office+-+Wilson"
    },
    {
      Name: "Budget Office",
      ContactInfo: "856-256-4120",
      SearchRowan: "https://search.rowan.edu/?q=Budget+Office"
    },
    {
      Name: "Bursar's Office",
      ContactInfo: "856-256-4150",
      SearchRowan: "https://search.rowan.edu/?q=Bursars+Office"
    },
    {
      Name: "Camden Campus",
      ContactInfo: "856-361-2900",
      SearchRowan: "https://search.rowan.edu/?q=Camden+Campus"
    },
    {
      Name: "CARES Institute",
      ContactInfo: "856-566-7036",
      SearchRowan: "https://search.rowan.edu/?q=CARES+Institute"
    },
    {
      Name: "Center for Innovation & Entrepreneurship",
      ContactInfo: "856-256-4271",
      SearchRowan: "https://search.rowan.edu/?q=Center+for+Innovation+&+Entrepreneurship"
    },
    {
      Name: "Chemical Engineering",
      ContactInfo: "856-256-5310",
      SearchRowan: "https://search.rowan.edu/?q=Chemical+Engineering"
    },
    {
      Name: "Chemistry & Biochemistry",
      ContactInfo: "856-256-4505",
      SearchRowan: "https://search.rowan.edu/?q=Chemistry+&+Biochemistry"
    },
    {
      Name: "Child Care Center",
      ContactInfo: "856-256-4018",
      SearchRowan: "https://search.rowan.edu/?q=Child+Care+Center"
    },
    {
      Name: "Civil & Environmental Engineering",
      ContactInfo: "856-256-5320",
      SearchRowan: "https://search.rowan.edu/?q=Civil+&+Environmental+Engineering"
    },
    {
      Name: "College of Business",
      ContactInfo: "856-256-4025",
      SearchRowan: "https://search.rowan.edu/?q=College+of+Business"
    },
    {
      Name: "College of Communication and Creative Arts",
      ContactInfo: "856-256-4340",
      SearchRowan: "https://search.rowan.edu/?q=College+of+Communication+and+Creative+Arts"
    },
    {
      Name: "College of Education",
      ContactInfo: "856-256-4750",
      SearchRowan: "https://search.rowan.edu/?q=College+of+Education"
    },
    {
      Name: "College of Education Advising Center",
      ContactInfo: "856-256-4420",
      SearchRowan: "https://search.rowan.edu/?q=College+of+Education+Advising+Center"
    },
    {
      Name: "College of Engineering",
      ContactInfo: "856-256-5300",
      SearchRowan: "https://search.rowan.edu/?q=College+of+Engineering"
    },
    {
      Name: "College of Humanities & Social Sciences",
      ContactInfo: "856-256-5840",
      SearchRowan: "https://search.rowan.edu/?q=College+of+Humanities+&+Social+Sciences"
    },
    {
      Name: "College of Performing Arts",
      ContactInfo: "856-256-4550",
      SearchRowan: "https://search.rowan.edu/?q=College+of+Performing+Arts"
    },
    {
      Name: "College of Science & Mathematics",
      ContactInfo: "856-256-4850",
      SearchRowan: "https://search.rowan.edu/?q=College+of+Science+&+Mathematics"
    },
    {
      Name: "Communication Studies",
      ContactInfo: "856-256-4348",
      SearchRowan: "https://search.rowan.edu/?q=Communication+Studies"
    },
    {
      Name: "Compliance Office",
      ContactInfo: "856-566-6136",
      SearchRowan: "https://search.rowan.edu/?q=Compliance+Office"
    },
    {
      Name: "Computer Science",
      ContactInfo: "856-256-4805",
      SearchRowan: "https://search.rowan.edu/?q=Computer+Science"
    },
    {
      Name: "Conference & Events Services",
      ContactInfo: "856-256-5446",
      SearchRowan: "https://search.rowan.edu/?q=Conference+&+Events+Services"
    },
    {
      Name: "Cooper Medical School - Academic Affairs",
      ContactInfo: "856-361-2830",
      SearchRowan: "https://search.rowan.edu/?q=Cooper+Medical+School+-+Academic+Affairs"
    },
    {
      Name: "Cooper Medical School - Administration",
      ContactInfo: "856-361-2840",
      SearchRowan: "https://search.rowan.edu/?q=Cooper+Medical+School+-+Administration"
    },
    {
      Name: "Cooper Medical School - Dean's Office",
      ContactInfo: "856-361-2800",
      SearchRowan: "https://search.rowan.edu/?q=Cooper+Medical+School+-+Deans+Office"
    },
    {
      Name: "Cooper Medical School - Department of Biomedical Sciences",
      ContactInfo: "856-361-2860",
      SearchRowan: "https://search.rowan.edu/?q=Cooper+Medical+School+-+Department+of+Biomedical+Sciences"
    },
    {
      Name: "Cooper Medical School - Student Affairs and Admissions",
      ContactInfo: "856-361-2850",
      SearchRowan: "https://search.rowan.edu/?q=Cooper+Medical+School+-+Student+Affairs+and+Admissions"
    },
    {
      Name: "Cooper Medical School of Rowan University",
      ContactInfo: "856-361-2800",
      SearchRowan: "https://search.rowan.edu/?q=Cooper+Medical+School+of+Rowan+University"
    },
    {
      Name: "Counseling & Psychological Services Center",
      ContactInfo: "856-256-4222",
      SearchRowan: "https://search.rowan.edu/?q=Counseling+&+Psychological+Services+Center"
    },
    {
      Name: "Dance",
      ContactInfo: "856-256-4031",
      SearchRowan: "https://search.rowan.edu/?q=Dance"
    },
    {
      Name: "Disability Resources",
      ContactInfo: "856-256-4234",
      SearchRowan: "https://search.rowan.edu/?q=Disability+Resources"
    },
    {
      Name: "Economics",
      ContactInfo: "856-256-4816",
      SearchRowan: "https://search.rowan.edu/?q=Economics"
    },
    {
      Name: "Educational Services and Leadership",
      ContactInfo: "856-256-4755",
      SearchRowan: "https://search.rowan.edu/?q=Educational+Services+and+Leadership"
    },
    {
      Name: "Electrical & Computer Engineering",
      ContactInfo: "856-256-5330",
      SearchRowan: "https://search.rowan.edu/?q=Electrical+&+Computer+Engineering"
    },
    {
      Name: "English",
      ContactInfo: "856-256-4065",
      SearchRowan: "https://search.rowan.edu/?q=English"
    },
    {
      Name: "EOF - MAP",
      ContactInfo: "856-256-4080",
      SearchRowan: "https://search.rowan.edu/?q=EOF+-+MAP"
    },
    {
      Name: "Facilities - Main Trouble Reporting",
      ContactInfo: "856-256-4650",
      SearchRowan: "https://search.rowan.edu/?q=Facilities+-+Main+Trouble+Reporting"
    },
    {
      Name: "Facilities Operations - Central Receiving",
      ContactInfo: "856-256-4611",
      SearchRowan: "https://search.rowan.edu/?q=Facilities+Operations+-+Central+Receiving"
    },
    {
      Name: "Field Experiences",
      ContactInfo: "856-256-4725",
      SearchRowan: "https://search.rowan.edu/?q=Field+Experiences"
    },
    {
      Name: "Financial Aid Office",
      ContactInfo: "856-256-4250",
      SearchRowan: "https://search.rowan.edu/?q=Financial+Aid+Office"
    },
    {
      Name: "Foreign Languages & Literatures",
      ContactInfo: "856-256-4070",
      SearchRowan: "https://search.rowan.edu/?q=Foreign+Languages+&+Literatures"
    },
    {
      Name: "General Counsel",
      ContactInfo: "856-256-4144",
      SearchRowan: "https://search.rowan.edu/?q=General+Counsel"
    },
    {
      Name: "Global Learning & Partnerships",
      ContactInfo: "856-256-4747",
      SearchRowan: "https://search.rowan.edu/?q=Global+Learning+&+Partnerships"
    },
    {
      Name: "Gourmet Dining",
      ContactInfo: "856-256-4610",
      SearchRowan: "https://search.rowan.edu/?q=Gourmet+Dining"
    },
    {
      Name: "Health & Exercise Science",
      ContactInfo: "856-256-4785",
      SearchRowan: "https://search.rowan.edu/?q=Health+&+Exercise+Science"
    },
    {
      Name: "Healthy Campus Initiatives",
      ContactInfo: "856-256-4333",
      SearchRowan: "https://search.rowan.edu/?q=Healthy+Campus+Initiatives"
    },
    {
      Name: "History",
      ContactInfo: "856-256-4818",
      SearchRowan: "https://search.rowan.edu/?q=History"
    },
    {
      Name: "Honors Program",
      ContactInfo: "856-256-4643",
      SearchRowan: "https://search.rowan.edu/?q=Honors+Program"
    },
    {
      Name: "Human Resources",
      ContactInfo: "856-256-4134",
      SearchRowan: "https://search.rowan.edu/?q=Human+Resources"
    },
    {
      Name: "Image Yearbook",
      ContactInfo: "856-256-4535",
      SearchRowan: "https://search.rowan.edu/?q=Image+Yearbook"
    },
    {
      Name: "International Center",
      ContactInfo: "856-256-4292",
      SearchRowan: "https://search.rowan.edu/?q=International+Center"
    },
    {
      Name: "IRT - Analytics, Systems & Applications (ASA)",
      ContactInfo: "856-256-4146",
      SearchRowan: "https://search.rowan.edu/?q=IRT+-+Analytics,+Systems+&+Applications+(ASA)"
    },
    {
      Name: "IRT - ASA, Information Systems Support",
      ContactInfo: "856-256-4175",
      SearchRowan: "https://search.rowan.edu/?q=IRT+-+ASA,+Information+Systems+Support"
    },
    {
      Name: "IRT - Main Office",
      ContactInfo: "856-256-4401",
      SearchRowan: "https://search.rowan.edu/?q=IRT+-+Main+Office"
    },
    {
      Name: "IRT - Network and Systems Services (NSS)",
      ContactInfo: "856-256-4590",
      SearchRowan: "https://search.rowan.edu/?q=IRT+-+Network+and+Systems+Services+(NSS)"
    },
    {
      Name: "IRT - Support Center",
      ContactInfo: "856-256-4400",
      SearchRowan: "https://search.rowan.edu/?q=IRT+-+Support+Center"
    },
    {
      Name: "IRT - SVP/CIO Office",
      ContactInfo: "856-256-5120",
      SearchRowan: "https://search.rowan.edu/?q=IRT+-+SVP/CIO+Office"
    },
    {
      Name: "IRT - Technology Services",
      ContactInfo: "856-256-4588",
      SearchRowan: "https://search.rowan.edu/?q=IRT+-+Technology+Services"
    },
    {
      Name: "Journalism",
      ContactInfo: "856-256-4049",
      SearchRowan: "https://search.rowan.edu/?q=Journalism"
    },
    {
      Name: "Kennedy Pharmacy",
      ContactInfo: "856-346-3535",
      SearchRowan: "https://search.rowan.edu/?q=Kennedy+Pharmacy"
    },
    {
      Name: "Language, Literacy, and Special Education",
      ContactInfo: "856-256-4745",
      SearchRowan: "https://search.rowan.edu/?q=Language,+Literacy,+and+Special+Education"
    },
    {
      Name: "Law & Justice Studies",
      ContactInfo: "856-256-4828",
      SearchRowan: "https://search.rowan.edu/?q=Law+&+Justice+Studies"
    },
    {
      Name: "Liberal Arts & Sciences Institute",
      ContactInfo: "856-256-5840",
      SearchRowan: "https://search.rowan.edu/?q=Liberal+Arts+&+Sciences+Institute"
    },
    {
      Name: "Library - Campbell",
      ContactInfo: "856-256-4800",
      SearchRowan: "https://search.rowan.edu/?q=Library+-+Campbell"
    },
    {
      Name: "Library - CMSRU",
      ContactInfo: "856-342-2525",
      SearchRowan: "https://search.rowan.edu/?q=Library+-+CMSRU"
    },
    {
      Name: "Library - RowanSOM",
      ContactInfo: "856-566-6800",
      SearchRowan: "https://search.rowan.edu/?q=Library+-+RowanSOM"
    },
    {
      Name: "Lost Rowan Card",
      ContactInfo: "856-256-4663",
      SearchRowan: "https://search.rowan.edu/?q=Lost+Rowan+Card"
    },
    {
      Name: "Mail Room",
      ContactInfo: "856-256-4613",
      SearchRowan: "https://search.rowan.edu/?q=Mail+Room"
    },
    {
      Name: "Management & Entrepreneurship",
      ContactInfo: "856-256-4026",
      SearchRowan: "https://search.rowan.edu/?q=Management+&+Entrepreneurship"
    },
    {
      Name: "Marketing & Business Information Systems",
      ContactInfo: "856-256-4029",
      SearchRowan: "https://search.rowan.edu/?q=Marketing+&+Business+Information+Systems"
    },
    {
      Name: "Mathematics",
      ContactInfo: "856-256-4844",
      SearchRowan: "https://search.rowan.edu/?q=Mathematics"
    },
    {
      Name: "McSiip",
      ContactInfo: "856-256-4827",
      SearchRowan: "https://search.rowan.edu/?q=McSiip"
    },
    {
      Name: "Mechanical Engineering",
      ContactInfo: "856-256-5340",
      SearchRowan: "https://search.rowan.edu/?q=Mechanical+Engineering"
    },
    {
      Name: "Media & Public Relations",
      ContactInfo: "856-256-4240",
      SearchRowan: "https://search.rowan.edu/?q=Media+&+Public+Relations"
    },
    {
      Name: "Molecular & Cellular Biosciences",
      ContactInfo: "856-256-4894",
      SearchRowan: "https://search.rowan.edu/?q=Molecular+&+Cellular+Biosciences"
    },
    {
      Name: "Multicultural Affairs",
      ContactInfo: "856-256-4448",
      SearchRowan: "https://search.rowan.edu/?q=Multicultural+Affairs"
    },
    {
      Name: "Music",
      ContactInfo: "856-256-4555",
      SearchRowan: "https://search.rowan.edu/?q=Music"
    },
    {
      Name: "Music Library",
      ContactInfo: "856-256-4799",
      SearchRowan: "https://search.rowan.edu/?q=Music+Library"
    },
    {
      Name: "NJISA",
      ContactInfo: "856-566-6843",
      SearchRowan: "https://search.rowan.edu/?q=NJISA"
    },
    {
      Name: "NJISA - Clinical Research Office",
      ContactInfo: "856-566-2747",
      SearchRowan: "https://search.rowan.edu/?q=NJISA+-+Clinical+Research+Office"
    },
    {
      Name: "NMI - Neuromusculoskeletal Institute",
      ContactInfo: "856-566-7010",
      SearchRowan: "https://search.rowan.edu/?q=NMI+-+Neuromusculoskeletal+Institute"
    },
    {
      Name: "Nursing (BSN)",
      ContactInfo: "856-256-4747",
      SearchRowan: "https://search.rowan.edu/?q=Nursing+(BSN)"
    },
    {
      Name: "Nursing (School Nurse Cert.)",
      ContactInfo: "856-256-4755",
      SearchRowan: "https://search.rowan.edu/?q=Nursing+(School+Nurse+Cert.)"
    },
    {
      Name: "Office of Career Advancement",
      ContactInfo: "856-256-4456",
      SearchRowan: "https://search.rowan.edu/?q=Office+of+Career+Advancement"
    },
    {
      Name: "Office of Sponsored Programs",
      ContactInfo: "856-256-4057",
      SearchRowan: "https://search.rowan.edu/?q=Office+of+Sponsored+Programs"
    },
    {
      Name: "Orientation & Student Leadership Programs",
      ContactInfo: "856-256-4041",
      SearchRowan: "https://search.rowan.edu/?q=Orientation+&+Student+Leadership+Programs"
    },
    {
      Name: "Payroll",
      ContactInfo: "856-256-4166",
      SearchRowan: "https://search.rowan.edu/?q=Payroll"
    },
    {
      Name: "Philosophy & Religion",
      ContactInfo: "856-256-4075",
      SearchRowan: "https://search.rowan.edu/?q=Philosophy+&+Religion"
    },
    {
      Name: "Physics & Astronomy",
      ContactInfo: "856-256-4855",
      SearchRowan: "https://search.rowan.edu/?q=Physics+&+Astronomy"
    },
    {
      Name: "Planetarium",
      ContactInfo: "856-256-5483",
      SearchRowan: "https://search.rowan.edu/?q=Planetarium"
    },
    {
      Name: "Political Science",
      ContactInfo: "856-256-4866",
      SearchRowan: "https://search.rowan.edu/?q=Political+Science"
    },
    {
      Name: "President's Office",
      ContactInfo: "856-256-4100",
      SearchRowan: "https://search.rowan.edu/?q=Presidents+Office"
    },
    {
      Name: "Print Center",
      ContactInfo: "856-256-4623",
      SearchRowan: "https://search.rowan.edu/?q=Print+Center"
    },
    {
      Name: "Provost's Office",
      ContactInfo: "856-256-4108",
      SearchRowan: "https://search.rowan.edu/?q=Provosts+Office"
    },
    {
      Name: "Psychology",
      ContactInfo: "856-256-4870",
      SearchRowan: "https://search.rowan.edu/?q=Psychology"
    },
    {
      Name: "Public Relations & Advertising",
      ContactInfo: "856-256-4312",
      SearchRowan: "https://search.rowan.edu/?q=Public+Relations+&+Advertising"
    },
    {
      Name: "Public Safety - Administration",
      ContactInfo: "856-256-4922",
      SearchRowan: "https://search.rowan.edu/?q=Public+Safety+-+Administration"
    },
    {
      Name: "Public Safety - Parking",
      ContactInfo: "856-256-4575",
      SearchRowan: "https://search.rowan.edu/?q=Public+Safety+-+Parking"
    },
    {
      Name: "Purchasing",
      ContactInfo: "856-256-4171",
      SearchRowan: "https://search.rowan.edu/?q=Purchasing"
    },
    {
      Name: "Radio/TV/Film",
      ContactInfo: "856-256-4641",
      SearchRowan: "https://search.rowan.edu/?q=Radio/TV/Film"
    },
    {
      Name: "Reading Clinic",
      ContactInfo: "856-256-4769",
      SearchRowan: "https://search.rowan.edu/?q=Reading+Clinic"
    },
    {
      Name: "Recreation Center",
      ContactInfo: "856-256-4900",
      SearchRowan: "https://search.rowan.edu/?q=Recreation+Center"
    },
    {
      Name: "Registrar's Office",
      ContactInfo: "856-256-4350",
      SearchRowan: "https://search.rowan.edu/?q=Registrars+Office"
    },
    {
      Name: "Residential Learning - Dean of Students",
      ContactInfo: "856-256-4266",
      SearchRowan: "https://search.rowan.edu/?q=Residential+Learning+-+Dean+of+Students"
    },
    {
      Name: "Residential Learning - University Housing",
      ContactInfo: "856-256-4266",
      SearchRowan: "https://search.rowan.edu/?q=Residential+Learning+-+University+Housing"
    },
    {
      Name: "Risk Management Program",
      ContactInfo: "856-256-4370",
      SearchRowan: "https://search.rowan.edu/?q=Risk+Management+Program"
    },
    {
      Name: "ROTC",
      ContactInfo: "856-256-5590",
      SearchRowan: "https://search.rowan.edu/?q=ROTC"
    },
    {
      Name: "Rowan Medicine",
      ContactInfo: "856-309-DOCS",
      SearchRowan: "https://search.rowan.edu/?q=Rowan+Medicine"
    },
    {
      Name: "Rowan Prep",
      ContactInfo: "856-256-4554",
      SearchRowan: "https://search.rowan.edu/?q=Rowan+Prep"
    },
    {
      Name: "Rowan University Creative",
      ContactInfo: "856-256-5444",
      SearchRowan: "https://search.rowan.edu/?q=Rowan+University+Creative"
    },
    {
      Name: "Schaub Inst. Materials Center",
      ContactInfo: "856-256-4710",
      SearchRowan: "https://search.rowan.edu/?q=Schaub+Inst.+Materials+Center"
    },
    {
      Name: "School of Biomedical Science and Health Professions",
      ContactInfo: "856-256-4323",
      SearchRowan: "https://search.rowan.edu/?q=School+of+Biomedical+Science+and+Health+Professions"
    },
    {
      Name: "School of Earth and Environment",
      ContactInfo: "856-256-5244",
      SearchRowan: "https://search.rowan.edu/?q=School+of+Earth+and+Environment"
    },
    {
      Name: "School of Veterinary Medicine",
      ContactInfo: "856-256-5982",
      SearchRowan: "https://search.rowan.edu/?q=School+of+Veterinary+Medicine"
    },
    {
      Name: "Service Learning, Volunteerism & Community Engagement",
      ContactInfo: "856-256-4595",
      SearchRowan: "https://search.rowan.edu/?q=Service+Learning,+Volunteerism+&+Community+Engagement"
    },
    {
      Name: "Social Justice, Inclusion, and Conflict Resolution",
      ContactInfo: "856-256-5495",
      SearchRowan: "https://search.rowan.edu/?q=Social+Justice,+Inclusion,+and+Conflict+Resolution"
    },
    {
      Name: "Sociology and Anthropology",
      ContactInfo: "856-256-4884",
      SearchRowan: "https://search.rowan.edu/?q=Sociology+and+Anthropology"
    },
    {
      Name: "SOM - Academic Affairs",
      ContactInfo: "856-566-7133",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Academic+Affairs"
    },
    {
      Name: "SOM - Academic Technology Media Services",
      ContactInfo: "856-566-7123",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Academic+Technology+Media+Services"
    },
    {
      Name: "SOM - Admissions",
      ContactInfo: "856-566-7050",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Admissions"
    },
    {
      Name: "SOM - Cell Biology Administration",
      ContactInfo: "856-566-6078",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Cell+Biology+Administration"
    },
    {
      Name: "SOM - Center for Teaching and Learning",
      ContactInfo: "856-566-6096",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Center+for+Teaching+and+Learning"
    },
    {
      Name: "SOM - Central Stores & Receiving (Logistical Services)",
      ContactInfo: "856-566-6893",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Central+Stores+&+Receiving+(Logistical+Services)"
    },
    {
      Name: "SOM - Clinical Trials Management",
      ContactInfo: "856-566-6003",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Clinical+Trials+Management"
    },
    {
      Name: "SOM - Continuing Medical Education",
      ContactInfo: "856-566-6358",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Continuing+Medical+Education"
    },
    {
      Name: "SOM - Dean's Office",
      ContactInfo: "856-566-6995",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Deans+Office"
    },
    {
      Name: "SOM - Environmental Services",
      ContactInfo: "856-566-6028",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Environmental+Services"
    },
    {
      Name: "SOM - Facilities Operations & Plant Management",
      ContactInfo: "856-566-6032",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Facilities+Operations+&+Plant+Management"
    },
    {
      Name: "SOM - Family Medicine",
      ContactInfo: "856-566-6789",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Family+Medicine"
    },
    {
      Name: "SOM - Financial Aid",
      ContactInfo: "856-566-6008",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Financial+Aid"
    },
    {
      Name: "SOM - Fitness/Wellness Center",
      ContactInfo: "856-566-6746",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Fitness/Wellness+Center"
    },
    {
      Name: "SOM - General Inquiries",
      ContactInfo: "856-566-7000",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+General+Inquiries"
    },
    {
      Name: "SOM - General Inquiries",
      ContactInfo: "856-566-6000",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+General+Inquiries"
    },
    {
      Name: "SOM - Graduate Medical Education",
      ContactInfo: "856-566-6835",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Graduate+Medical+Education"
    },
    {
      Name: "SOM - Human Resources",
      ContactInfo: "856-566-6159",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Human+Resources"
    },
    {
      Name: "SOM - Internal Medicine",
      ContactInfo: "856-566-6894",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Internal+Medicine"
    },
    {
      Name: "SOM - Lab Corps",
      ContactInfo: "856-566-7117",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Lab+Corps"
    },
    {
      Name: "SOM - Mail Room - Courier Services",
      ContactInfo: "856-566-6027",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Mail+Room+-+Courier+Services"
    },
    {
      Name: "SOM - Marketing",
      ContactInfo: "856-566-6094",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Marketing"
    },
    {
      Name: "SOM - Molecular Biology Administration",
      ContactInfo: "856-566-6049",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Molecular+Biology+Administration"
    },
    {
      Name: "SOM - OB/GYN",
      ContactInfo: "856-589-1414",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+OB/GYN"
    },
    {
      Name: "SOM - Office of Ethics & Compliance",
      ContactInfo: "856-566-6136",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Office+of+Ethics+&+Compliance"
    },
    {
      Name: "SOM - Office of Research & Sponsored Programs",
      ContactInfo: "856-566-6066",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Office+of+Research+&+Sponsored+Programs"
    },
    {
      Name: "SOM - Office of Sponsored Programs",
      ContactInfo: "856-566-6100",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Office+of+Sponsored+Programs"
    },
    {
      Name: "SOM - Psychiatry",
      ContactInfo: "856-482-9000",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Psychiatry"
    },
    {
      Name: "SOM - Public Safety",
      ContactInfo: "856-566-6033",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Public+Safety"
    },
    {
      Name: "SOM - Registrar",
      ContactInfo: "856-566-7055",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Registrar"
    },
    {
      Name: "SOM - Standardized Patient LAB",
      ContactInfo: "856-566-6172",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Standardized+Patient+LAB"
    },
    {
      Name: "SOM - Student Affairs and Alumni Engagement",
      ContactInfo: "856-566-6740",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Student+Affairs+and+Alumni+Engagement"
    },
    {
      Name: "SOM - Student Cashier's Office (Bursar)",
      ContactInfo: "856-566-6791",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Student+Cashiers+Office+(Bursar)"
    },
    {
      Name: "SOM - Top Docs Cafe",
      ContactInfo: "856-566-6703",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+Top+Docs+Cafe"
    },
    {
      Name: "SOM - University Advancement",
      ContactInfo: "856-566-5074",
      SearchRowan: "https://search.rowan.edu/?q=SOM+-+University+Advancement"
    },
    {
      Name: "South Jersey Technology Park (SJTP)",
      ContactInfo: "856-256-4099",
      SearchRowan: "https://search.rowan.edu/?q=South+Jersey+Technology+Park+(SJTP)"
    },
    {
      Name: "Sports Information",
      ContactInfo: "856-256-4252",
      SearchRowan: "https://search.rowan.edu/?q=Sports+Information"
    },
    {
      Name: "Strategic Enrollment Management",
      ContactInfo: "856-256-5185",
      SearchRowan: "https://search.rowan.edu/?q=Strategic+Enrollment+Management"
    },
    {
      Name: "Student Affairs Office",
      ContactInfo: "856-256-4283",
      SearchRowan: "https://search.rowan.edu/?q=Student+Affairs+Office"
    },
    {
      Name: "Student Center & Campus Activities",
      ContactInfo: "856-256-4875",
      SearchRowan: "https://search.rowan.edu/?q=Student+Center+&+Campus+Activities"
    },
    {
      Name: "Student Center Information Desk",
      ContactInfo: "856-256-4606",
      SearchRowan: "https://search.rowan.edu/?q=Student+Center+Information+Desk"
    },
    {
      Name: "Student Government Association (S.G.A.)",
      ContactInfo: "856-256-4540",
      SearchRowan: "https://search.rowan.edu/?q=Student+Government+Association+(S.G.A.)"
    },
    {
      Name: "Student Services Center",
      ContactInfo: "856-256-4420",
      SearchRowan: "https://search.rowan.edu/?q=Student+Services+Center"
    },
    {
      Name: "Student University Programmers (SUP)",
      ContactInfo: "856-256-4875",
      SearchRowan: "https://search.rowan.edu/?q=Student+University+Programmers+(SUP)"
    },
    {
      Name: "Switchboard",
      ContactInfo: "856-256-4000",
      SearchRowan: "https://search.rowan.edu/?q=Switchboard"
    },
    {
      Name: "Teacher Education",
      ContactInfo: "856-256-4738",
      SearchRowan: "https://search.rowan.edu/?q=Teacher+Education"
    },
    {
      Name: "Testing Center",
      ContactInfo: "856-256-4263",
      SearchRowan: "https://search.rowan.edu/?q=Testing+Center"
    },
    {
      Name: "THE SHOP",
      ContactInfo: "856-256-6333",
      SearchRowan: "https://search.rowan.edu/?q=THE+SHOP"
    },
    {
      Name: "The WHIT",
      ContactInfo: "856-256-4538",
      SearchRowan: "https://search.rowan.edu/?q=The+WHIT"
    },
    {
      Name: "Theatre & Dance",
      ContactInfo: "856-256-4030",
      SearchRowan: "https://search.rowan.edu/?q=Theatre+&+Dance"
    },
    {
      Name: "Tutoring Center",
      ContactInfo: "856-256-4460",
      SearchRowan: "https://search.rowan.edu/?q=Tutoring+Center"
    },
    {
      Name: "University Advancement",
      ContactInfo: "856-256-4095",
      SearchRowan: "https://search.rowan.edu/?q=University+Advancement"
    },
    {
      Name: "University Advising Center",
      ContactInfo: "856-256-4459",
      SearchRowan: "https://search.rowan.edu/?q=University+Advising+Center"
    },
    {
      Name: "University Events",
      ContactInfo: "856-256-5432",
      SearchRowan: "https://search.rowan.edu/?q=University+Events"
    },
    {
      Name: "University Publications",
      ContactInfo: "856-256-4195",
      SearchRowan: "https://search.rowan.edu/?q=University+Publications"
    },
    {
      Name: "University Senate",
      ContactInfo: "856-256-4515",
      SearchRowan: "https://search.rowan.edu/?q=University+Senate"
    },
    {
      Name: "Venue",
      ContactInfo: "856-256-4536",
      SearchRowan: "https://search.rowan.edu/?q=Venue"
    },
    {
      Name: "Vice President for Finance",
      ContactInfo: "856-256-4125",
      SearchRowan: "https://search.rowan.edu/?q=Vice+President+for+Finance"
    },
    {
      Name: "Welcome Center",
      ContactInfo: "856-256-5487",
      SearchRowan: "https://search.rowan.edu/?q=Welcome+Center"
    },
    {
      Name: "Welcome Gate",
      ContactInfo: "856-256-4218",
      SearchRowan: "https://search.rowan.edu/?q=Welcome+Gate"
    },
    {
      Name: "Wellness Center",
      ContactInfo: "856-256-4333",
      SearchRowan: "https://search.rowan.edu/?q=Wellness+Center"
    },
    {
      Name: "WGLS-FM - Radio Station",
      ContactInfo: "856-256-4489",
      SearchRowan: "https://search.rowan.edu/?q=WGLS-FM+-+Radio+Station"
    },
    {
      Name: "Wilson Box Office",
      ContactInfo: "856-256-4545",
      SearchRowan: "https://search.rowan.edu/?q=Wilson+Box+Office"
    },
    {
      Name: "Women's Studies",
      ContactInfo: "856-256-4514",
      SearchRowan: "https://search.rowan.edu/?q=Womens+Studies"
    },
    {
      Name: "Writing Arts",
      ContactInfo: "856-256-4345",
      SearchRowan: "https://search.rowan.edu/?q=Writing+Arts"
    },
    {
      Name: "Writing Center (Library)",
      ContactInfo: "856-256-4376",
      SearchRowan: "https://search.rowan.edu/?q=Writing+Center+(Library)"
    }
  ];

exports.run = async (client, interaction) => {
 
    let departmentname = '';
    if(Array.isArray(interaction)) {
        departmentname = interaction[0];
    } else {
        if(interaction.options.get("departmentname")) departmentname = interaction.options.get("departmentname").value;
    }

    const embed = new MessageEmbed()
        .setColor(generateRandomColour())
        .setDescription("A list of all department names and contact infromation")
        .setTimestamp()
        .setFooter({ text: `Made with \u2665` });

    if (departmentname == '') {
        embed.setDescription("Please enter a department name with your command. To see a list of all departments type /departments all");
    }else if (departmentname == 'all') {
        embed.setDescription("Here is a list of all departments:\nhttps://directory.rowan.edu/phones.php");
    } else {
        var array = Object.keys(depdata)
        .map(function(key) {
            return depdata[key].Name;
        });
        var matches = stringSimilarity.findBestMatch(departmentname, array);
        embed.setDescription("Department: " + matches.bestMatch.target + "\nContact Info: " + depdata[matches.bestMatchIndex].ContactInfo + "\nSearch Rowan: " + depdata[matches.bestMatchIndex].SearchRowan);
    }
        
    return { embeds: [embed] }
}

exports.name = "department";
exports.description = "provides infomation about rowan departments";
exports.args = "departmentname";

function generateRandomColour() {
    return `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
}
