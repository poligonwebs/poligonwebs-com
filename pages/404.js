import Layout from "../components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="navbar-dark inner-page-header">
                <div>
                    {/* PÁGINA 404
			============================================= */}
                    <section id="page-404" className="bg--white-300 division">
                        <div className="container">
                            <div className="row justify-content-center">
                                {/* TEXTO DE PÁGINA 404 */}
                                <div className="col-md-9 col-lg-8">
                                    <div className="page-404-txt text-center">
                                        {/* Imagen */}
                                        <div className="rel page-404-img">
                                            <img className="img-fluid" src="/images/error-404.png" alt="imagen-error-404" />
                                        </div>
                                        {/* Texto */}
                                        <h2 className="s-56 w-700 color--dark">Página No Encontrada</h2>
                                        <h6 className="s-22 color--grey">
                                            ¡Ups! La página que estás buscando podría haber sido movida, renombrada o nunca haber existido
                                        </h6>
                                        {/* Botón */}
                                        <Link href="/demo-1" className="btn btn--theme hover--theme">Volver al inicio</Link>
                                    </div>
                                </div>	{/* FIN TEXTO DE PÁGINA 404 */}
                            </div>	   {/* Fin fila */}
                        </div>	   {/* Fin contenedor */}
                    </section>	{/* FIN PÁGINA 404 */}
                    {/* LÍNEA DIVISORIA */}
                    <hr className="divider divider-light" />
                </div>

            </Layout>
        </>
    )
}
