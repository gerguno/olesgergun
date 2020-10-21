import InstagramEmbed from 'react-instagram-embed';

export default function Ktf() {
    return (
        <>
            <h1>Kyiv Type Foundry</h1>
            <InstagramEmbed
                url='https://www.instagram.com/p/CFkV3BniFmN/'
                maxWidth={1000}
                hideCaption={true}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
            />
        </>
    )
}