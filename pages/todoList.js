import TodoPage from './../components/TodoPage/TodoPage';
import Link from 'next/link';

export default function TodoList() {
    return (
        <>
            <TodoPage />
            <Link href="/"> &lt;&lt; main page</Link>            
        </>
    );
}