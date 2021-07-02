$(document).ready(function () {
    var selectedImg = "";
    $('#full-screen').click(function () {
        $('h1').show();
        $('#full-screen').hide();
        // $('#defaultCanvas0').css('opacity') = '0';
        $('#defaultCanvas0').css('transform','scale(2)');
        $('#canvas-wrapper').css({ 'opacity' : 0 });
        setTimeout(doSomething, 500);
        function doSomething() {
            $('#canvas-wrapper').hide();
            console.log("helloSlow")
        }
    });

    var supports = (function() {
        var d = document.documentElement,
            c = "ontouchstart" in window || navigator.msMaxTouchPoints;
        if (c) {
            d.className += " touch";
            return {
                touch: true
            }
        } else {
            d.className += " no-touch";
            return {
                touch: false
            }
        }
      }
      )();

    


    // ==========================================================
    // Animation Students
    // ==========================================================

    var studentsBOA = [{
            id: 1,
            class: 'Bachelor of Animation',
            name: 'Caleb Wypych',
            email: 'calebflame@gmail.com',
            photoProfile: 'Caleb-WYPYCH.jpg',
            social: 'Artstation.com/warsaw',
            detail: 'I’m a 3D generalist, majoring in Houdini VFX. At first, I laughed at the idea of using ' +
                'Houdini because it was too complicated but after learning more about it and seeing ' +
                'what Houdini could do. It made me fall in love with it. I’m really passionate about ' +
                'breaking down how VFX works and being able to make something I want to!',
            project01: '01-caleb-01.png',
            project02: '01-caleb-02.png',
            project03: '01-caleb-03.png',
            project04: '01-caleb-04.png',
            project05: '01-caleb-05.png',
            project06: '01-caleb-06.png',
            project07: '01-caleb-07.png'
        },
        {
            id: 2,
            class: 'Bachelor of Animation',
            name: 'Dwight Bruce',
            email: 'dwight.bruce24@gmail.com',
            photoProfile: 'Dwight-BRUCE.jpg',
            social: 'www.artstation.com/dwight_bruce',
            detail: 'I love bringing characters and stories to life. I’m a 2D artist whose primary strength ' +
                'is Pre-Vis & Storyboarding. Additionally I am a solid composer/musician, sound ' +
                'designer, editor and writer. <br><br>' +
                'In the future I am aiming to work as an Independant Content Creator, and self ' +
                'publish my own original Comics, Music & Animated content.',
            project01: '01-dwight-01.jpg',
            project02: '01-dwight-02.jpeg',
            project03: '01-dwight-03.jpg',
            project04: '01-dwight-04.jpg',
            project05: '01-dwight-05.png',
            project06: '01-dwight-06.jpg',
            project07: '01-dwight-07.jpg'
        },
        {
            id: 3,
            class: 'Bachelor of Animation',
            name: 'Becca Ross',
            email: 'beccarabusiness@gmail.com',
            photoProfile: 'Rebecca-ROSS.jpg',
            social: '@lemonessia',
            detail: 'I am an aspiring illustrator, writer and character modeler. I also enjoy taking long ' +
                'naps in the sun, and being ignored by my cat.',
            project01: '01-rebecca-01.png',
            project02: '01-rebecca-02.png',
            project03: '01-rebecca-03.png',
            project04: '01-rebecca-04.png',
            project05: '01-rebecca-05.png',
            project06: '01-rebecca-06.png',
            project07: '01-rebecca-07.png'
        },
        {
            id: 4,
            class: 'Bachelor of Animation',
            name: 'Erika Labilles',
            email: 'heialthea@gmail.com',
            photoProfile: 'Erika-LABILLES.jpg',
            social: '@artstation.com/heialthea',
            detail: 'I am a 3D artist and work as freelance illustrator on the side. My passion is in ' +
                'creating characters of all sorts and finding ways to show their personalities through ' +
                'their looks. I strive for the highest quality and standards with my illustrations ' +
                'and 3D sculpts and always eager to learn new techniques and skills with every ' +
                'opportunity.',
            project01: '01-elabilles-01.jpg',
            project02: '01-elabilles-02.jpg',
            project03: '01-elabilles-03.JPG',
            project04: '01-elabilles-04.JPG',
            project05: '01-elabilles-05.JPG',
            project06: '01-elabilles-06.JPG',
            project07: '01-elabilles-07.JPG'
        },
        {
            id: 5,
            class: 'Bachelor of Animation',
            name: 'Rae Boschat',
            email: 'raeanne.boschat@hotmail.com',
            photoProfile: 'Rae-BOSCHAT.jpg',
            social: '@gaillean_arts',
            detail: 'I’m a 2D artist with a cartoony style and a keen interest in folklore and fantasy as ' +
                'a genre, such as the tales from the British Isles. I also enjoy telling stories through ' +
                'artwork, for example comics and storyboarding, I like using colour theory to ' +
                'portray mood and composition to further communicate character emotions. Mixing ' +
                '2D and 3D assets is a personal project to find creative ways to tell visual stories.',
            project01: '01-rae-01.png',
            project02: '01-rae-02.png',
            project03: '01-rae-03.png',
            project04: '01-rae-04.png',
            project05: '01-rae-05.png',
            project06: '01-rae-06.png',
            project07: '01-rae-07.png'
        },
        {
            id: 6,
            class: 'Bachelor of Animation',
            name: 'Seth McIntyre',
            email: 'mcintyse.100@gmail.com',
            photoProfile: 'Seth-MCINTIRE.jpg',
            social: '@100_seth',
            detail: 'I specialise in, level design, environment art and 3D modeling. I am passionate ' +
                'about creating games that offer interactivity, engagement and socialisation.<br><br>' +
                'Because I believe games should be used as a social platform that engages the ' +
                'audience rather than pushing them away.<br><br>' +
                'I have always liked enginneering at a young age, it always fasicinates me on how ' +
                'to make things work, finding the intersection between function and form. By using ' +
                'my passion, I am able to translate that into my level designs, creating levels that are ' +
                'both intuitive to use, and fun to engage with.',
            project01: '01-seth-01.jpg',
            project02: '01-seth-02.png',
            project03: '01-seth-03.png',
            project04: '01-seth-04.png',
            project05: '01-seth-05.PNG',
            project06: '01-seth-06.jpg',
            project07: '01-seth-07.jpg'
        },
        {
            id: 7,
            class: 'Bachelor of Animation',
            name: 'Tim Chivers',
            email: 'timothy.chivers@gmail.com',
            photoProfile: 'Tim-CHIVERS.jpg',
            social: '@trimmuisme',
            detail: 'I am a passionate visual artist with a large focus on storytelling. I enjoy ' +
                'experimenting with visuals styles to create spome unique in order ot enhance ' +
                'the stories I tell. My main focus is in 2D but I greatly enjoy working with 3D ' +
                'and combining the two.',
            project01: '01-tim-01.jpg',
            project02: '01-tim-02.jpg',
            project03: '01-tim-03.jpg',
            project04: '01-tim-04.png',
            project05: '01-tim-05.png',
            project06: '01-tim-06.png',
            project07: '01-tim-07.jpg'
        }
    ];

    // console.log(studentsBOA);

    // ==========================================================
    // Web & UX Students
    // ==========================================================

    var studentsWUX = [{
            id: 8,
            class: 'Web & UX Design',
            name: 'Alexander Little',
            email: 'arlittledesign@gmail.com',
            photoProfile: 'Alex-LITTLE.jpg',
            social: 'alex.yoobee.site/portfolio',
            detail: 'I enjoy complex problems and turning them into simple and beautiful interface ' +
                'designs. I also love the logic and structure of coding and always strive to write ' +
                'elegant and efficient code, whether it be in HTML, CSS or jQuery. <br><br>' +
                'When I’m not coding or pushing pixels you’ll find me exploring the Greater ' +
                'Wellignton Region or repairing vintage computers.',
            project01: '03-alexander-01.png',
            project02: '03-alexander-02.png',
            project03: '03-alexander-03.png',
            project04: '03-alexander-04.png',
            project05: '03-alexander-05.png',
            project06: '03-alexander-06.png',
            project07: '03-alexander-07.png'
        },
        {
            id: 9,
            class: 'Web & UX Design',
            name: 'Juan Camilo Caro',
            email: 'jcamilocarorodriguez@gmail.com',
            photoProfile: 'Juan.jpg',
            social: '@juankcaro',
            detail: 'I love making websites because I get to be creative and solve problems daily, I find ' +
                'web design a way to get the attention of someone and somehow entertain them ' +
                'and transform the user experience into a fun and exciting way.',
            project01: '03-juan-01.png',
            project02: '03-juan-02.png',
            project03: '03-juan-03.png',
            project04: '03-juan-04.png',
            project05: '03-juan-05.png',
            project06: '03-juan-06.png',
            project07: '03-juan-07.png'
        },
        {
            id: 10,
            class: 'Web & UX Design',
            name: 'Muhammed Shahas',
            email: 'mshahas786@gmail.com',
            photoProfile: 'Muhammed-SHAHAS.jpg',
            social: '@muhammedshahas786',
            detail: 'My enthusiasm towards understanding and widening my skills in the field of web ' +
                'development has helped me to become a full-stack developer. Passionate towards ' +
                'learning and adapting new changes according to market requirements. Confident ' +
                'in front-end development, UX design, also well used with Javascript, React and love ' +
                'to create unique and professional styles.',
            project01: '03-muhammed-02.png',
            project02: '03-muhammed-03.png',
            project03: '03-muhammed-04.png',
            project04: '03-muhammed-05.png',
            project05: '',
            project06: '',
            project07: ''
        },
        {
            id: 11,
            class: 'Web & UX Design',
            name: 'Natalia Ramirez',
            email: 'ntlc.ramirez@gmail.com',
            photoProfile: 'Natalia-RAMIREZ.jpg',
            social: 'www.nataliacatalina.com',
            detail: 'Coming from a journey in photography and photo retouching, I challenged myself to learn and discover new things.<br><br>' +
                'That’s when I discovered web. Coding and development are not things I had considered for myself in the past ' +
                'I’m still new to it, but I’ve enjoyed how demanding and inspiring it is.<br><br>' +
                'I enjoy front- and back-end coding and UI development. My background in photography and Adobe Photoshop has proven valuable within web and I look forward ' +
                'to continued growth in this area.',
            project01: '03-natalia-01.png',
            project02: '03-natalia-02.png',
            project03: '03-natalia-03.png',
            project04: '03-natalia-04.png',
            project05: '03-natalia-05.png',
            project06: '03-natalia-06.png',
            project07: ''
        },
        {
            id: 12,
            class: 'Web & UX Design',
            name: 'Josh van der Waay',
            email: 'joshvdw@live.com',
            photoProfile: 'Josh.jpg',
            social: 'behance.net/joshvdw <br> <ul style="list-style-type:disc;"><li>github.com/joshvdw</li></ul>',
            detail: 'My name is Josh van der Waay and I’m a passionate creative with a love for ' +
                'technology living in Wellington. <br><br>' +
                "My current primary focus is on front-end web development, but I'm looking to further develop my " +
                'skills so that I can be a more versatile full-stack developer! <br><br>',
            project01: '03-josh-01.png',
            project02: '03-josh-02.png',
            project03: '03-josh-03.png',
            project04: '03-josh-07.png',
            project05: '03-josh-08.png',
            project06: '03-josh-11.png',
            project07: '03-josh-12.png'
        },
        {
            id: 13,
            class: 'Web & UX Design',
            name: 'Hayley Clarke',
            email: 'hayleyclarkedesign@gmail.com',
            photoProfile: 'Hayley-CLARKE.jpg',
            social: 'https://www.behance.net/hayleyclarke1',
            detail: 'Aspiring Web & Graphic Designer. <br><br>' +
                    'I’ve always found myself getting lost in the creative process and problem solving of design. I want to ' +
                    'evoke thought and conversations and ultimately create a positive impact on our society and ' +
                    'environment through my visual work.',
            project01: '03-hayley-01.png',
            project02: '03-hayley-02.png',
            project03: '03-hayley-03.png',
            project04: '03-hayley-04.png',
            project05: '03-hayley-05.png',
            project06: '03-hayley-06.png',
            project07: '03-hayley-07.png'
        }
    ]

    // ==========================================================
    // Creative Digital Design Students
    // ==========================================================

    var studentsCDD = [
        {
            id: 15,
            class: 'Creative Digital Design',
            name: 'Alexis Araza',
            email: 'atmaraza@gmail.com',
            photoProfile: 'Alexis-ARAZA.jpg',
            social: '@alexis.araza',
            detail: 'Since coming to the Creative Digital Design Course, I’ve found that my enthusiasim ' +
                    'and curiosity as a designer has grown with each lesson learnt. I’ve discovered joy'  +
                    'in venturing out of my comfort zone and experimenting with different digital and ' +
                    'physical mediums for unique and compelling outcomes. My time at Yoobee has ' +
                    'been a meaningful and memorable experience to me not only as a student but also ' +
                    'as an individual, and I look forward to see what else I can find and design!',                
            project01: '02-alexis-01.png',
            project02: '02-alexis-02.png',
            project03: '02-alexis-03.png',
            project04: '02-alexis-04.png',
            project05: '02-alexis-05.png',
            project06: '02-alexis-06.png',
            project07: '02-alexis-07.png'
        },
        {
            id: 16,
            class: 'Creative Digital Design',
            name: 'Chirag Garcha',
            email: 'garchachirag@gmail.com',
            photoProfile: 'Chirag-GARCHA.jpg',
            social: '@studentsocialmedia',
            detail: 'I am a 20 year-old design enthusiast always keen to learn! My personal ambition in ' +
                    'the world of design is to be a fluent illustrator since I have an eye for different styles ' +
                    'of art. In my learning curve of two years with Yoobee, I have got the opportunity to ' +
                    'explore so many platforms and work on different scenarios. I am very excited to put ' +
                    'my skills to a test and go on to learn more.',                
            project01: '02-chirag-01.png',
            project02: '02-chirag-02.png',
            project03: '02-chirag-03.png',
            project04: '02-chirag-04.png',
            project05: '02-chirag-05.png',
            project06: '02-chirag-06.png',
            project07: '02-chirag-07.png'
        },
        {
            id: 17,
            class: 'Creative Digital Design',
            name: 'David Scott',
            email: 'nz.david.scott@gmail.com',
            photoProfile: 'David-SCOTT.jpg',
            social: '@Arrowskee',
            detail: 'Getting out of my comfort zone is always where I’ve felt in my element.' +
                    'Perseverance and a good attitude got me to where I am and I’m really proud of the ' +
                    'progress I’ve made. The design course has taught not only how to be a better artist ' +
                    'and designer, but it’s also taught me that as long as I put my all into something I ' +
                    'enjoy, I can make some sick art.',   
            project01: '02-david-01.png',
            project02: '02-david-02.png',
            project03: '02-david-03.png',
            project04: '02-david-04.png',
            project05: '02-david-05.png',
            project06: '02-david-06.png',
            project07: '02-david-07.png'
        },
        {
            id: 18,
            class: 'Creative Digital Design',
            name: 'Emmanuella Reid',
            email: 'hello@emmanuella.design',
            photoProfile: 'Emmanuella-REID.jpg',
            social: 'www.emmanuella.design',
            detail: 'I might have been born here in New Zealand, but travelling around Australia with ' +
                    'a new home and school each year taught me to appreciate how art and design can ' +
                    'transcend over different languages and cultures. Over the last two years here at ' +
                    'Yoobee, my love and knowledge for visual communication and graphic design has ' +
                    'only continued to grow and develop, and I can’t see it ever ending.',   
            project01: '02-emmanuella-01.png',
            project02: '02-emmanuella-02.png',
            project03: '02-emmanuella-03.png',
            project04: '02-emmanuella-04.png',
            project05: '02-emmanuella-05.png',
            project06: '02-emmanuella-06.png',
            project07: '02-emmanuella-07.png'
        },
        {
            id: 19,
            class: 'Creative Digital Design',
            name: 'Fin Baker',
            email: 'finbaker@hotmail.com',
            photoProfile: 'Fin-BAKER.jpg',
            social: '@fbaker_gd',
            detail: 'For me, the most satisfying stage of the design process is the concepting phase. I ' +
                    'can spend days duplicating and changing a design, ending with hundreds of variations ' +
                    'and exploring every avenue. From within this stage is where the best work is made ' +   
                    'and it’s where I love to exist.',
            project01: '02-fin-01.png',
            project02: '02-fin-02.png',
            project03: '02-fin-03.png',
            project04: '02-fin-04.png',
            project05: '02-fin-05.png',
            project06: '02-fin-06.png',
            project07: '02-fin-07.png'
        },
        {
            id: 20,
            class: 'Creative Digital Design',
            name: 'Gordon MacLeod',
            email: 'gordon.britmac@gmail.com',
            photoProfile: 'Gordon-MACLEOD.jpg',
            social: '@commcain',
            detail: 'Storytelling is the core driver behind all my creative impulses, I love to create ' +
                    'designs that weave a story that people can lose themselves in. Atmosphere, ' +
                    'emotion and depth are all key components in how I approach projects for ' +
                    'businesses, consumers and creative designers. It’s been a pleasure to explore and ' +
                    'refine my ideas and processes during my years at Yoobee, and it has inspired me to ' +
                    'go beyond hobbyism and explore with real freedom.',  
            project01: '02-gordon-01.png',
            project02: '02-gordon-02.png',
            project03: '02-gordon-03.png',
            project04: '02-gordon-04.png',
            project05: '02-gordon-05.png',
            project06: '02-gordon-06.png',
            project07: '02-gordon-07.png'
        },
        {
            id: 21,
            class: 'Creative Digital Design',
            name: 'Jacob Preston',
            email: 'jacobprestondesigns@gmail.com',
            photoProfile: 'Jacob-PRESTON.jpg',
            social: '@jake_designsthings',
            detail: 'A design is a plan or specification for the construction of an object or system ' +
                    'or for the implementation of an activity or process, or the result of that plan or ' +
                    'specification in the form of a prototype, product or process. The verb to design ' +
                    'expresses the process of developing a design.',
            project01: '02-jacob-01.png',
            project02: '02-jacob-02.png',
            project03: '02-jacob-03.png',
            project04: '02-jacob-04.png',
            project05: '02-jacob-05.png',
            project06: '02-jacob-06.png',
            project07: '02-jacob-07.png'
        },
        {
            id: 22,
            class: 'Creative Digital Design',
            name: 'Max Christensen',
            email: 'maxowenchristensen@yahoo.com',
            photoProfile: 'Max-CHRISTENSEN.jpg',
            social: '@maxchristensen.design',
            detail: 'My Journey through Yoobee has given me an opportunity to grow and evolve as ' +
                    'a graphic designer & illustrator. Yoobee has helped me to re-discover my love for ' +
                    'illustration design and the ways I can combine that with branding and identity. They ' +
                    'have also introduced me to my new found love of teaching, and helping people learn ' +
                    'graphic design and develop their skills. Through a lot of trial and error over the past ' +
                    '2 years, I can now safely say that I have built myself a strong arsenal of skills to be ' +
                    'able to help anyone tell their story through stunning design.',
            project01: '02-max-01.png',
            project02: '02-max-02.png',
            project03: '02-max-03.png',
            project04: '02-max-04.png',
            project05: '02-max-05.png',
            project06: '02-max-06.png',
            project07: '02-max-07.png'
        },
        {
            id: 23,
            class: 'Creative Digital Design',
            name: 'Morgan Ramji',
            email: 'morgan.ramji@gmail.com',
            photoProfile: 'Morgan-RAMJI.jpg',
            social: '@morgs.designs',
            detail: 'The past few years at Yoobee have pushed me well out of my comfort zone. ' +
                    'They’ve allowed me to grow immensely as a designer; I’ve managed to overcome ' +
                    'challenges both within the course content and within myself. I’ve enjoyed ' +
                    'experimenting with both physical and digital mediums to creatively solve design ' +
                    'problems. I’m excited to further expand my learning and to keep developing my ' +
                    'skillset in the future.',
            project01: '02-morgan-01.png',
            project02: '02-morgan-02.png',
            project03: '02-morgan-03.png',
            project04: '02-morgan-04.png',
            project05: '02-morgan-05.png',
            project06: '02-morgan-06.png',
            project07: '02-morgan-07.jpg'
        },
        {
            id: 24,
            class: 'Creative Digital Design',
            name: 'Prakash Bhana',
            email: 'prakashbhana.design@gmail.com',
            photoProfile: 'Prakash-BHANA.jpg',
            social: '@Prakash_Bhana',
            detail: 'My journey through Yoobee has helped me grow as an artist and a person. As a ' +
                    'photographer I have always been interested in making creative content and exploring ' +
                    'the unknown. As this course has progressed my curiosity for creatively solving '   +
                    'problems and developing ideas has gone beyond what I thought I was capable of. ' +
                    'I can’t wait to take my knowledge and skill into the world and continue my creative ' +
                    'journey.',
            project01: '02-prakash-01.png',
            project02: '02-prakash-02.png',
            project03: '02-prakash-03.png',
            project04: '02-prakash-04.png',
            project05: '02-prakash-05.png',
            project06: '02-prakash-06.png',
            project07: '02-prakash-07.png'
        },
        {
            id: 25,
            class: 'Creative Digital Design',
            name: 'Sahil Bansal',
            email: 'inkspirating@gmail.com',
            photoProfile: 'Sahil-BANSAL.jpg',
            social: '@commcreat',
            detail: 'Hello, there. I am Sahil Bansal, and I am from Delhi, India. I like to incubate and '   +
                    'build brands. To make myself better at it, I took a sabbatical to learn more. Each ' +
                    'brand, to me, is a person, grasping to communicate with my senses and I’ve begun ' +
                    'my learning curve with Yoobee to equip myself better for exploring Design as a tool. ' +
                    'As a culmination of my lifelong reverence for advertising, I want to make myself ' +
                    'worthy to give birth to one such brand that cannot be overlooked. A brand that ' +
                    'screams out and echoes its fundamental characteristics - an intangible entity with ' +
                    'tangible presence; everything Communication Design is about.',
            project01: '02-sahil-01.png',
            project02: '02-sahil-02.png',
            project03: '02-sahil-03.png',
            project04: '02-sahil-04.png',
            project05: '02-sahil-05.png',
            project06: '02-sahil-06.png',
            project07: '02-sahil-07.png'
        },
        {
            id: 26,
            class: 'Creative Digital Design',
            name: 'Ray Rose',
            email: 'raymondwenruirose@gmail.com',
            photoProfile: 'Ray-ROSE.jpg',
            social: '@broteinnz',
            detail: 'As technology becomes more a part of our everyday lives the digital-art-space will '   +
                    'only continue to grow. I personally see the virtual design sector as the next frontier ' +
                    'for human artistic expression and exploration. Bound by only what you envision ' +
                    'and your ability to translate pen to paper... or in this case, cursor to pixel. <br><br>' +
                    'Before beginning my creative journey I had no prior design experience, my time ' +
                    'at Yoobee has given me form, structure and a more deliberate approach when it ' +
                    'comes to problem solving. The support and guidance of the staff and especially my ' +
                    'tutors have been instrumental in bringing this creative endeavour to fruition.',
            project01: '02-ray-01.png',
            project02: '02-ray-02.png',
            project03: '02-ray-03.png',
            project04: '02-ray-04.png',
            project05: '02-ray-05.png',
            project06: '02-ray-06.png',
            project07: '02-ray-07.png'
        },
        {
            id: 27,
            class: 'Creative Digital Design',
            name: 'Victoria Stevens',
            email: 'littlebusstudios@gmail.com',
            photoProfile: 'Tori-STEVENS.jpg',
            social: '@littlebusstudios @torias.corner',
            detail: 'Having had my plans to move overseas postponed, I decided to treat myself to '   +
                    'another year of education, and I’m so glad I did! I’ve been able to see myself develop ' +
                    'so much as a designer, as well as seeing my confidence in my ability grow too. I still ' +
                    'have so much to learn and I can’t wait to see how much further I can go!',
            project01: '02-tori-01.png',
            project02: '02-tori-02.png',
            project03: '02-tori-03.png',
            project04: '02-tori-04.png',
            project05: '02-tori-05.png',
            project06: '02-tori-06.png',
            project07: '02-tori-07.png'
        },
    ]

    // ==========================================================
    // Function call to display all items
    // ==========================================================
    BOAstudents(); // Displays Bachelors of animation students
    WUXstudents(); // Displays Web & UX students
    CDDstudents(); // Displays Creative Digital Design students


    // ==========================================================
    // Function to display all Bachelor of Animation student
    // ==========================================================
    function BOAstudents() {
        // console.log("functions is running");
        var i = 0;
        $('#animationResult').text('');
        for (i = 0; i < studentsBOA.length; i++) {
            displayCards2(i);
        } //end of for loop
    } //end of animationStudents function

    function displayCards2(i) {
        // console.log("loop running");
        $('#animationResult').append(

            '<div class="col" data-bs-toggle="modal" data-bs-target=#' + studentsBOA[i].name.replace(/ /g, "") + ' >' +
            '<a href="" class="student-link"><img src="images/BachelorOfAnimation/BW/' + studentsBOA[i].photoProfile + '" class="card-img-top rounded-circle border border border-5 border-light" alt="' + '"></a>' +
            '<div class="card-body " >' +
            '<h5 class="card-title text-center bg-white p-2 rounded-pill">' + studentsBOA[i].name + '</h5>' +
            '</div>' +
            '</div>' +

            // Modal
            '<div class="modal fade " id=' + studentsBOA[i].name.replace(/ /g, "") + ' tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
                '<div class="modal-dialog modal-dialog-scrollable modal-fullscreen modal-fullscreen-xxl-down" style="overflow:auto!important;">' +
                    '<div class="modal-content" style="overflow:auto!important;">' +
                        '<div class="modal-header header-BOA">'+
                            '<h3 class="modal-title " id="staticBackdropLabel">' + studentsBOA[i].name + '</h3>' +
                            '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
                        '</div>'+

                        // Student Projects 01
                        '<div class="modal-body">'+
                            '<div class="container-portfolio">'+
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/BOA/' + studentsBOA[i].project01 + '" alt="">' +
                                '</div>' +    
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/BOA/' + studentsBOA[i].project02 + '" alt="">' +
                                '</div>' +    
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/BOA/' + studentsBOA[i].project03 + '" alt="">' +
                                '</div>' +    
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/BOA/' + studentsBOA[i].project04 + '" alt="">' +
                                '</div>' +    
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/BOA/' + studentsBOA[i].project05 + '" alt="">' +
                                '</div>' +    
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/BOA/' + studentsBOA[i].project06 + '" alt="">' +
                                '</div>' +    
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/BOA/' + studentsBOA[i].project07 + '" alt="">' +
                                '</div>' +
                            '</div>'+
                        '</div>'+

                        // Fullscreen image preview box 
                        '<div class="preview-box" style="display:none">'+
                            '<div class="details">'+
                                '<span class="title">Bachelor of Animation</span>'+
                                '<span class="icon fas fa-times"></span>'+
                            '</div>'+
                            '<div class="image-box">'+
                                '<img id="image-b" src=" '+ selectedImg + '" alt="">'+
                            '</div>' +    
                        '</div>'+
                        '<div class="shadow" style="display:none"></div>'+



                        // Student Profile 
                        '<div class="modal-footer modal-footer-BOA">'+
                            '<div class="row">'+
                                '<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">'+
                                    '<img class="student_image" src="images/BachelorOfAnimation/BW/' + studentsBOA[i].photoProfile + '" alt="">' +
                                '</div>'+
                                '<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 aboutContainer">'+
                                    '<h4>About</h4>'+
                                    '<p>' + studentsBOA[i].detail + '</p><br>' +
                                    '<h4>Contact Links</h4>'+
                                    '<ul>'+
                                        '<li>'+ studentsBOA[i].social +'</li>'+
                                    '</ul>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>' // End Modal

        ); //end of apprend
    }

    // ==========================================================
    // Function to display all Web&UX students
    // ==========================================================
    function WUXstudents() {
        var i = 0;
        $('#webResult').text('');
        for (i = 0; i < studentsWUX.length; i++) {
            displayCards(i);
        } //end of for loop
    } //end of animationStudents function

    function displayCards(j) {
        
        $('#webResult').append(

            '<div class="col" data-bs-toggle="modal" data-bs-target=#'+ studentsWUX[j].name.replace(/ /g, "") +' >' +
              '<a href="" class="student-link"><img src="images/Web&UxDesign/BW/' + studentsWUX[j].photoProfile + '" class="card-img-top rounded-circle border border border-5 border-light" alt="' + '"></a>' +
              '<div class="card-body " >' +
                '<h5 class="card-title text-center bg-white p-2 rounded-pill">'+studentsWUX[j].name+'</h5>' +
              '</div>' +
            '</div>'+

            // Modal
            '<div class="modal fade " id='+studentsWUX[j].name.replace(/ /g, "")+' tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
                '<div class="modal-dialog modal-dialog-scrollable modal-fullscreen modal-fullscreen-xxl-down" style="overflow:auto!important;">' +
                    '<div class="modal-content" style="overflow:auto!important;">' +
                        '<div class="modal-header header-WUX">'+
                            '<h3 class="modal-title " id="staticBackdropLabel">'+studentsWUX[j].name+'</h3>'+
                            '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
                        '</div>'+

                        // Student Projects 01
                        '<div class="modal-body">'+
                            '<div class="container-portfolio">'+
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/WUX/' + studentsWUX[j].project01 + '" alt="">'+
                                '</div>' +    
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/WUX/' + studentsWUX[j].project02 + '" alt="">'+
                                '</div>' +    
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/WUX/' + studentsWUX[j].project03 + '" alt="">'+
                                '</div>' +    
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/WUX/' + studentsWUX[j].project04 + '" alt="">'+
                                '</div>' +    
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/WUX/' + studentsWUX[j].project05 + '" alt="">'+
                                '</div>' +    
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/WUX/' + studentsWUX[j].project06 + '" alt="">'+
                                '</div>' +    
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/WUX/' + studentsWUX[j].project07 + '" alt="">'+
                                '</div>' +
                            '</div>'+
                        '</div>'+

                        // Fullscreen image preview box 
                        '<div class="preview-box" style="display:none">'+
                            '<div class="details">'+
                                '<span class="title">UX and Web Design</span>'+
                                '<span class="icon fas fa-times"></span>'+
                            '</div>'+
                            '<div class="image-box">'+
                                '<img id="image-b" src=" '+ selectedImg + '" alt="">'+
                            '</div>' +    
                        '</div>'+
                        '<div class="shadow" style="display:none"></div>'+

                        // Student Profile 
                        '<div class="modal-footer modal-footer-WUX">'+
                            '<div class="row">'+
                                '<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">'+
                                    '<img class="student_image" src="images/Web&UxDesign/BW/' + studentsWUX[j].photoProfile + '" alt="">'+
                                '</div>'+
                                '<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 aboutContainer">'+
                                    '<h4>About</h4>'+
                                    '<p>'+ studentsWUX[j].detail +'</p><br>'+
                                    '<h4>Contact Links</h4>'+
                                    '<ul>'+
                                        '<li>'+ studentsWUX[j].social +'</li>'+
                                    '</ul>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>' // End Modal
        ); //end of apprend
    }

    // ==========================================================
    // Function to display all Creative Digital Design students
    // ==========================================================
    function CDDstudents() {
        console.log("functions is running");
        var i = 0;
        $('#CDDresult').text('');
        for (i = 0; i < studentsCDD.length; i++) {
            displayCards3(i);
        } //end of for loop
    } //end of animationStudents function

    function displayCards3(j) {
        $('#CDDresult').append(

            '<div class="col" data-bs-toggle="modal" data-bs-target=#' + studentsCDD[j].name.replace(/ /g, "") + ' >' +
            '<a href="" class="student-link"><img src="images/CreativeDigitalDesign/BW/' + studentsCDD[j].photoProfile + '" class="card-img-top rounded-circle border border border-5 border-light" alt="' + '"></a>' +
            '<div class="card-body " >' +
            '<h5 class="card-title text-center bg-white p-2 rounded-pill">' + studentsCDD[j].name + '</h5>' +
            '</div>' +
            '</div>' +

            // Modal
            '<div class="modal fade " id=' + studentsCDD[j].name.replace(/ /g, "") + ' tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
                '<div class="modal-dialog modal-dialog-scrollable modal-fullscreen modal-fullscreen-xxl-down" style="overflow:auto!important;">' +
                    '<div class="modal-content" style="overflow:auto!important;">' +
                        '<div class="modal-header header-CDD">'+
                            '<h3 class="modal-title " id="staticBackdropLabel">' + studentsCDD[j].name + '</h3>' +
                            '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
                        '</div>'+

                        // Student Projects 01
                        '<div class="modal-body">'+
                            '<div class="container-portfolio">'+
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/CDD/' + studentsCDD[j].project01 + '" alt="">' +
                                '</div>' +    
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/CDD/' + studentsCDD[j].project02 + '" alt="">' +
                                '</div>' +    
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/CDD/' + studentsCDD[j].project03 + '" alt="">' +
                                '</div>' +    
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/CDD/' + studentsCDD[j].project04 + '" alt="">' +
                                '</div>' +    
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/CDD/' + studentsCDD[j].project05 + '" alt="">' +
                                '</div>' +    
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/CDD/' + studentsCDD[j].project06 + '" alt="">' +
                                '</div>' +    
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/CDD/' + studentsCDD[j].project07 + '" alt="">' +
                                '</div>' +
                            '</div>'+
                        '</div>'+

                        // Fullscreen image preview box 
                        '<div class="preview-box" style="display:none">'+
                            '<div class="details">'+
                                '<span class="title">Creative Digital Design</span>'+
                                '<span class="icon fas fa-times"></span>'+
                            '</div>'+
                            '<div class="image-box">'+
                                '<img id="image-b" src=" '+ selectedImg + '" alt="">'+
                            '</div>' +    
                        '</div>'+
                        '<div class="shadow" style="display:none"></div>'+



                        // Student Profile 
                        '<div class="modal-footer modal-footer-CDD">'+
                            '<div class="row">'+
                                '<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">'+
                                    '<img class="student_image" src="images/CreativeDigitalDesign/BW/' + studentsCDD[j].photoProfile + '" alt="">' +
                                '</div>'+
                                '<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 aboutContainer">'+
                                    '<h4>About</h4>'+
                                    '<p>' + studentsCDD[j].detail + '</p><br>' +
                                    '<h4>Contact Links</h4>'+
                                    '<ul>'+
                                        '<li>' + studentsCDD[j].social + '</li>' +
                                    '</ul>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>' // End Modal

        ); //end of apprend
    }

    // OPEN PROJECTMODELS
    $('.image-portfolio').click(function () {
        selectedImg = $(this).find('img').attr("src");
        console.log(selectedImg);
        $('.preview-box').show();
        $('.shadow').show();
        $('.image-box').find('img').attr("src", selectedImg);
    });

    $('.fa-times').click(function () {
        $('.preview-box').hide();
        $('.shadow').hide();
    });

    $('.student-link').click(function () {
        event.preventDefault();
    }) // preventing auto refresh
  
}); //Document Ready Jquery


// ==========================================================
// package for animation
// ==========================================================

const presets = [
    [
        "@babel/env",
        {
            targets: {
                edge: "17",
                firefox: "60",
                chrome: "67",
                safari: "11.1",
            },
            useBuiltIns: "usage",
            corejs: "3.6.4",
        },
    ],
];

/* animation  */
let windowW = window.innerWidth;
let windowH = window.innerHeight;
let isLoaded = false;
let glitch;
let imgSrc = 'data:image/png;base64,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'


function setup() {
    background(0);
    var myCanvas = createCanvas(900, 600);
    myCanvas.parent("canvas-wrapper");
    loadImage(imgSrc, function(img) {
        glitch = new Glitch(img);
        isLoaded = true;
    });
}

function draw() {
    clear();
    // background(0);

    if (isLoaded) {
        glitch.show();
    }

}

class Glitch {
    constructor(img) {
        this.channelLen = 4;
        this.imgOrigin = img;
        this.imgOrigin.loadPixels();
        this.copyData = [];
        this.flowLineImgs = [];
        this.shiftLineImgs = [];
        this.shiftRGBs = [];
        this.scatImgs = [];
        this.throughFlag = true;
        this.copyData = new Uint8ClampedArray(this.imgOrigin.pixels);

        // flow line
        for (let i = 0; i < 1; i++) {
            let o = {
                pixels: null,
                t1: floor(random(0, 1000)),
                speed: floor(random(4, 24)),
                randX: floor(random(24, 80))
            };
            this.flowLineImgs.push(o);
        }

        // shift line
        for (let i = 0; i < 6; i++) {
            let o = null;
            this.shiftLineImgs.push(o);
        }

        // shift RGB
        for (let i = 0; i < 1; i++) {
            let o = null;
            this.shiftRGBs.push(o);
        }

        // scat imgs
        for (let i = 0; i < 3; i++) {
            let scatImg = {
                img: null,
                x: 0,
                y: 0
            };
            this.scatImgs.push(scatImg);
        }
    }

    replaceData(destImg, srcPixels) {
        for (let y = 0; y < destImg.height; y++) {
            for (let x = 0; x < destImg.width; x++) {
                let r, g, b, a;
                let index;
                index = (y * destImg.width + x) * this.channelLen;
                r = index;
                g = index + 1;
                b = index + 2;
                a = index + 3;
                destImg.pixels[r] = srcPixels[r];
                destImg.pixels[g] = srcPixels[g];
                destImg.pixels[b] = srcPixels[b];
                destImg.pixels[a] = srcPixels[a];
            }
        }
        destImg.updatePixels();
    }

    flowLine(srcImg, obj) {

        let destPixels,
            tempY;
        destPixels = new Uint8ClampedArray(srcImg.pixels);
        obj.t1 %= srcImg.height;
        obj.t1 += obj.speed;
        //tempY = floor(noise(obj.t1) * srcImg.height);
        tempY = floor(obj.t1);
        for (let y = 0; y < srcImg.height; y++) {
            if (tempY === y) {
                for (let x = 0; x < srcImg.width; x++) {
                    let r, g, b, a;
                    let index;
                    index = (y * srcImg.width + x) * this.channelLen;
                    r = index;
                    g = index + 1;
                    b = index + 2;
                    a = index + 3;
                    destPixels[r] = srcImg.pixels[r] + obj.randX;
                    destPixels[g] = srcImg.pixels[g] + obj.randX;
                    destPixels[b] = srcImg.pixels[b] + obj.randX;
                    destPixels[a] = srcImg.pixels[a];
                }
            }
        }
        return destPixels;
    }

    shiftLine(srcImg) {

        let offsetX;
        let rangeMin, rangeMax;
        let destPixels;
        let rangeH;

        destPixels = new Uint8ClampedArray(srcImg.pixels);
        rangeH = srcImg.height;
        rangeMin = floor(random(0, rangeH));
        rangeMax = rangeMin + floor(random(1, rangeH - rangeMin));
        offsetX = this.channelLen * floor(random(-40, 40));

        for (let y = 0; y < srcImg.height; y++) {
            if (y > rangeMin && y < rangeMax) {
                for (let x = 0; x < srcImg.width; x++) {
                    let r, g, b, a;
                    let r2, g2, b2, a2;
                    let index;

                    index = (y * srcImg.width + x) * this.channelLen;
                    r = index;
                    g = index + 1;
                    b = index + 2;
                    a = index + 3;
                    r2 = r + offsetX;
                    g2 = g + offsetX;
                    b2 = b + offsetX;
                    destPixels[r] = srcImg.pixels[r2];
                    destPixels[g] = srcImg.pixels[g2];
                    destPixels[b] = srcImg.pixels[b2];
                    destPixels[a] = srcImg.pixels[a];
                }
            }
        }
        return destPixels;
    }

    shiftRGB(srcImg) {

        let randR, randG, randB;
        let destPixels;
        let range;

        range = 16;
        destPixels = new Uint8ClampedArray(srcImg.pixels);
        randR = (floor(random(-range, range)) * srcImg.width + floor(random(-range, range))) * this.channelLen;
        randG = (floor(random(-range, range)) * srcImg.width + floor(random(-range, range))) * this.channelLen;
        randB = (floor(random(-range, range)) * srcImg.width + floor(random(-range, range))) * this.channelLen;

        for (let y = 0; y < srcImg.height; y++) {
            for (let x = 0; x < srcImg.width; x++) {
                let r, g, b, a;
                let r2, g2, b2, a2;
                let index;

                index = (y * srcImg.width + x) * this.channelLen;
                r = index;
                g = index + 1;
                b = index + 2;
                a = index + 3;
                r2 = (r + randR) % srcImg.pixels.length;
                g2 = (g + randG) % srcImg.pixels.length;
                b2 = (b + randB) % srcImg.pixels.length;
                destPixels[r] = srcImg.pixels[r2];
                destPixels[g] = srcImg.pixels[g2];
                destPixels[b] = srcImg.pixels[b2];
                destPixels[a] = srcImg.pixels[a];
            }
        }

        return destPixels;
    }

    getRandomRectImg(srcImg) {
        let startX;
        let startY;
        let rectW;
        let rectH;
        let destImg;
        startX = floor(random(0, srcImg.width - 30));
        startY = floor(random(0, srcImg.height - 50));
        rectW = floor(random(30, srcImg.width - startX));
        rectH = floor(random(1, 50));
        destImg = srcImg.get(startX, startY, rectW, rectH);
        destImg.loadPixels();
        return destImg;
    }

    show() {

        // restore the original state
        this.replaceData(this.imgOrigin, this.copyData);

        // sometimes pass without effect processing
        let n = floor(random(100));
        if (n > 75 && this.throughFlag) {
            this.throughFlag = false;
            setTimeout(() => {
                this.throughFlag = true;
            }, floor(random(40, 400)));
        }
        if (!this.throughFlag) {
            push();
            translate((width - this.imgOrigin.width) / 2, (height - this.imgOrigin.height) / 2);
            image(this.imgOrigin, 0, 0);
            pop();
            return;
        }

        // flow line
        this.flowLineImgs.forEach((v, i, arr) => {
            arr[i].pixels = this.flowLine(this.imgOrigin, v);
            if (arr[i].pixels) {
                this.replaceData(this.imgOrigin, arr[i].pixels);
            }
        })

        // shift line
        this.shiftLineImgs.forEach((v, i, arr) => {
            if (floor(random(100)) > 50) {
                arr[i] = this.shiftLine(this.imgOrigin);
                this.replaceData(this.imgOrigin, arr[i]);
            } else {
                if (arr[i]) {
                    this.replaceData(this.imgOrigin, arr[i]);
                }
            }
        })

        // shift rgb
        this.shiftRGBs.forEach((v, i, arr) => {
            if (floor(random(100)) > 65) {
                arr[i] = this.shiftRGB(this.imgOrigin);
                this.replaceData(this.imgOrigin, arr[i]);
            }
        })

        push();
        translate((width - this.imgOrigin.width) / 2, (height - this.imgOrigin.height) / 2);
        image(this.imgOrigin, 0, 0);
        pop();

        // scat image
        this.scatImgs.forEach((obj) => {
            push();
            translate((width - this.imgOrigin.width) / 2, (height - this.imgOrigin.height) / 2);
            if (floor(random(100)) > 80) {
                obj.x = floor(random(-this.imgOrigin.width * 0.3, this.imgOrigin.width * 0.7));
                obj.y = floor(random(-this.imgOrigin.height * 0.1, this.imgOrigin.height));
                obj.img = this.getRandomRectImg(this.imgOrigin);
            }
            if (obj.img) {
                image(obj.img, obj.x, obj.y);
            }
            pop();
        })

    }

}
