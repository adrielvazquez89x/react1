import { RotatingLines } from 'react-loader-spinner'

const Loader = () => {

    return (
        <>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="4"
                animationDuration="0.75"
                width="72"
                visible={true}
            />
        </>
    )
}


export default Loader