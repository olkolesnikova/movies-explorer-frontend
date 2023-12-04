import './PageNotFound.css';

function PageNotFound() {

    return (
        <main>
            <div className="notfound">
                <h1 className="notfound__title">404</h1>
                <p className="notfound__subtitle">Страница не найдена </p>
                <a href="/" className="notfound__link-back">Назад</a>
            </div>
        </main>

    )
}

export default PageNotFound;