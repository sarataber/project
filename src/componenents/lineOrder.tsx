interface LineProps {
    name: string
}

const Line = ({ name }: LineProps) => {
    return <div> a, b. c. {name && <button>עריכה {name}</button>}</div>
}

export default Line