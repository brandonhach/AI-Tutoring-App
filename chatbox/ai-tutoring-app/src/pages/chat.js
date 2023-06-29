import Head from 'next/head';
import Layout from '../../components/layout';
import Nav from '../../components/nav';


export default function Chat() {
    return(
        <div>

            <Layout>
                <Head>
                    <title>Chat with a personalized AI Tutor</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <Nav />
                <h1>Welcome to the AI Tutor App!</h1>
                <h3>developed by Brandon and Sean</h3>
                <p>Here you can chat with our trained AI to help you learn any concept with ease!</p>
                <textarea id="chatbox" rows="10" cols="50"></textarea>
                <button id="send">Send</button>
            </Layout>

        </div>
    );
}