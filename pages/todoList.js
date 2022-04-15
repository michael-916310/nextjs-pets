import TodoPage from './../components/TodoPage/TodoPage';
import Footer from './../components/Footer/Footer';
import initialData from './../public/data/initialToDoList.json';

export default function TodoList(props) {
    return (
        <>
            <TodoPage {...props}/>
            <Footer />    
        </>
    );
}

export async function getServerSideProps(context) {
    // lets try SSR 
    // run and render on every request
    return {
        props: {
            items:initialData,
        }
    }
}