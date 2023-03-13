import Filters from './Filters';

export default function Header() {
    return (
        <header className="text-center">
            <h1 className="text-5xl my-5 ">Shop 🛒</h1>
            <Filters />
        </header>
    );
}
