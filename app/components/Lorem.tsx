export default function Lorem({ times = 10 }) {

    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const loremArray = []
    for (let i = 0; i < times; i++) {
        loremArray.push(text)
    }

    return (
        <>
            {loremArray.map((loremp, index) => (
                <p key={index} className="lorem">
                    {loremp}
                </p>
            ))}
        </>)
}
