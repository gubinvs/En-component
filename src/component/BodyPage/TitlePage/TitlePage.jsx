import "../body.catalog.page.css";

function TitlePage (props) {
    return (
        <>
            <div className="title-page__title-block">
                <h1 className="title-section">{props.title}</h1>
                <div className="discr-title-section">{props.discr}</div>
            </div>
        </>
    )

}

export default TitlePage;