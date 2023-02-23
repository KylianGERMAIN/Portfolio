import type { NextPage } from "next";
import Head from "next/head";
import HomeContainer from "../containers/home/home";
import Layout from "../components/layout/layout";
import { useEffect, useState } from "react";

import jsonfr from "../public/trad-json/fr.json";
import jsonen from "../public/trad-json/en.json";

const Home: NextPage = () => {
    const [lang, setLang] = useState(jsonen);

    useEffect(() => {
        var userLang = navigator.language;
        if (userLang != "fr") {
            setLang(jsonen);
        } else {
            setLang(jsonfr);
        }
    }, []);

    return (
        <Layout lang={lang}>
            <Head>
                <title>Kylian Germain Portfolio</title>
                <meta
                    name="description"
                    content={`I am Kylian GERMAIN, passionate about everything that touches new technologies, full-stack developer, specialized in web and mobile and student in 4th year at Epitech Paris.`}
                />

                <meta itemProp="name" content={"Kylian Germain Portfolio"} />
                <meta
                    itemProp="description"
                    content={`I am Kylian GERMAIN, passionate about everything that touches new technologies, full-stack developer, specialized in web and mobile and student in 4th year at Epitech Paris.`}
                />
                <meta
                    itemProp="image"
                    content={
                        "https://media.licdn.com/dms/image/D4D03AQEN76uqXN8RAw/profile-displayphoto-shrink_800_800/0/1676460161742?e=1682553600&v=beta&t=t_cf9apOCHZ6sujhvfKjdQK3seU0HExw9XJC3L53QAY"
                    }
                />

                <meta name="og:title" content={"Kylian Germain Portfolio"} />
                <meta
                    name="og:description"
                    content={`I am Kylian GERMAIN, passionate about everything that touches new technologies, full-stack developer, specialized in web and mobile and student in 4th year at Epitech Paris.`}
                />
                <meta
                    property="og:image"
                    content={
                        "https://media.licdn.com/dms/image/D4D03AQEN76uqXN8RAw/profile-displayphoto-shrink_800_800/0/1676460161742?e=1682553600&v=beta&t=t_cf9apOCHZ6sujhvfKjdQK3seU0HExw9XJC3L53QAY"
                    }
                />
                <meta
                    property="og:url"
                    content={"https://www.kylian-germain.com/"}
                />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content={"Kylian Germain Portfolio"}
                />
                <meta
                    name="twitter:description"
                    content={`I am Kylian GERMAIN, passionate about everything that touches new technologies, full-stack developer, specialized in web and mobile and student in 4th year at Epitech Paris.`}
                />
                <meta
                    name="twitter:image"
                    content={
                        "https://media.licdn.com/dms/image/D4D03AQEN76uqXN8RAw/profile-displayphoto-shrink_800_800/0/1676460161742?e=1682553600&v=beta&t=t_cf9apOCHZ6sujhvfKjdQK3seU0HExw9XJC3L53QAY"
                    }
                />
            </Head>
            <HomeContainer lang={lang} setLang={setLang} />
        </Layout>
    );
};

export default Home;
