import pizza from "../assets/pizza.png";
function Carrinho() {
  document.title = 'Carrinho de compras'
  return (
    <>
      <div className="font-poppins text-center text-2xl font-bold my-5">
        Carrinho de compras
      </div>
      <div className="max-w-5xl m-auto flex justify-between flex-row-reverse ">
        <div className="max-w-480">
          <div className="border p-5 w-480 mb-5">
            <span className="flex mb-4 text-lg font-medium" htmlFor="desconto">
              Cupom de desconto
            </span>
            <form className="flex gap-3" action="#">
              <input
                className="p-2 w-full border rounded-lg border-black"
                type="text"
                name="desconto"
                id="desconto"
                placeholder="Insira seu cupom de desconto"
              />
              <button className="bg-orange-500 w p-2 w-32 rounded-lg">
                Aplicar
              </button>
            </form>
          </div>
          <div className="flex flex-col gap-2 mb-5 border-b-2 p-5">
            <span className="text-lg font-bold">Resumo do Pedido</span>
            <span className="font-light">1 itens no seu carrinho</span>
          </div>
          <div className="flex  flex-col gap-3 border p-5">
            <div className="flex justify-between font-bold">
              <span>Subtotal:</span>
              <span>R$ 880,57</span>
            </div>
            <div className="flex justify-between font-bold text-green-500">
              <span>Desconto no pedido</span>
              <span>R$ 100,00</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>R$ 900,00</span>
            </div>
          </div>
          <div className="flex justify-around mt-5">
            <button className="w-56 font-bold border p-5 rounded-xl bg-orange-500">Continuar comprando</button>
            <button className="w-56 font-bold border p-5 rounded-xl bg-green-500">Finalizar compra</button>
          </div>
        </div>
        <div>
          <div className="w-480 mb-8 flex flex-col p-1 border-t-2 shadow-2xl rounded-lg">
            <span className="font-bold text-center">Pizza de frango</span>
            <div className="flex justify-between items-center">
              <img className="w-36" src={pizza} alt="pizza" />

              <div className="flex italic flex-col text-xs gap-2 border-l ml-2 border-black p-3">
                <span>
                  Deliciosa pizza de frango com queijo mussarela e delicioso
                  molho da casa
                </span>
                <span className="font-bold">R$ 49.99</span>
                <div className="flex gap-2">
                  <select
                    className="border border-black p-1 rounded-md"
                    id="quantidade"
                    name="quantidade"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <span className="font-bold">Total R$ 49,99</span>
                <div>
                  <button className="mt-2 w-full border text-center bg-orange-500 p-2 rounded-xl">
                    Add Car
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  );
}

export default Carrinho;
