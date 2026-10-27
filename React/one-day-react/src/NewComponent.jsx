function NameList(){
    const names=['raunak', 'ram', 'riya', 'sam', 'john']

    return(
        <ul>
            {names.map((student) => (<li key={student}>{student}</li>))}
        </ul>
    );
}

export default NameList;