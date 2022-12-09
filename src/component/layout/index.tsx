import Gnb from '../gnb';

interface ILayout {
    header: boolean;
    footer: boolean;
    children: React.ReactChild;
    back: boolean;
    backFunc: () => void;
}

const Index = ({children, footer}: ILayout) => {
    return (
        <>
            {children}
            {
                footer && (
                    <Gnb />
                   )
            }

        </>
    )
}

export default Index;