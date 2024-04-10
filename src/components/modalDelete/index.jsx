import "./index.css";

export default function modalDelete({ deleteFood, toggleModal }) {
    const handleBackgroundClick = (event) => {
        // Verifica se o alvo do evento é a div de fundo modal-background
        if (event.target.classList.contains('modal-background')) {
            toggleModal();
        }
    };

    return (

        <div className="modal-background" onClick={(e) => handleBackgroundClick(e)}>
            <div className="modal-delete-content">
                <div className="modal-header">
                    <button type="button" className="modal-close-button" aria-label="Fechar" onClick={toggleModal}>
                        <span aria-hidden='true'>&times;</span>
                    </button>
                </div>
                <div className="title">
                    <h3>Deletar Ração</h3>
                </div>
                <div className="text">
                    <p>Tem certeza que deseja apagar a ração cadastrada?</p>
                </div>
                <div className="buttonList">
                    <button>Sair</button>

                    <button className="button-default" onClick={() => {
                        deleteFood()
                        toggleModal()
                    }}>Deletar</button>

                </div>
            </div>
        </div>

    )
}