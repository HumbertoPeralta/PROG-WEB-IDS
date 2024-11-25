
<?php
    include_once __DIR__.'/../src/views/layouts/header.php';
    $producto = getBuys();
?>

<main>
    <section class="hero">
        <div class="hero-contenido">
            <img src="<?=ASSETS_URL?>/img/pareja.PNG" alt="Imagen central"> 
        </div>

        <a class="hero-boton" href="<?=BASE_URL?>/../src/views/buys/details.php">Comprar</a>

        <div class="indicadores">
            <div class="activo"></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
    </section>

    <div class="producto-grid">
        <div class="producto-tarjeta">
            <img src="<?=ASSETS_URL?>/img/playera.png" alt="Playeras">
            <p class="producto-nombre">Playeras</p>
            <button class="producto-btn">Ver más</button>
        </div>

        <div class="producto-tarjeta">
            <img src="<?=ASSETS_URL?>/img/pantalones.jpg" alt="Pantalones">
            <p class="producto-nombre">Pantalones</p>
            <button class="producto-btn">Ver más</button>
        </div>

        <div class="producto-tarjeta">
            <img src="<?=ASSETS_URL?>/img/sudadera.jpg" alt="Sudadera">
            <p class="producto-nombre">Sudadera</p>
            <button class="producto-btn">Ver más</button>
        </div>

        <div class="producto-tarjeta">
            <img src="<?=ASSETS_URL?>/img/camisas.jpg" alt="Camisas">
            <p class="producto-nombre">Camisas</p>
            <button class="producto-btn">Ver más</button>
        </div>
    </div>

    <div class="promociones">
        <p class="promociones-text">Promociones 50%</p>
        <button class="promociones-btn"> Ver promociones</button>
    </div>
</main>

<?php include '../src/views/layouts/footer.php'; ?>