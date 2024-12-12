<script>
    export default {
        name: "Navbar",
    };
</script>

<template>
    <nav class="bg-green-800 sticky top-0">
        <div class="flex justify-between">
            <div
                id="Brand"
                class=" m-2 flex items-center justify-between gap-5"
            >
                <img
                    src="/src/assets/images/pluto_natural_color_20150714.jpg"
                    class="rounded-full w-10 h-10"
                />
                <p class=" text-white font-bold text-lg">Pluto Is Still A Planet</p>
            </div>
            <ul class="flex gap-2 m-2 items-center">
                <li><a class="hover:bg-green-300 p-3 bg-green-400 rounded-2xl" href="#">Home</a></li>
                <li><a class="hover:bg-green-300 p-3 bg-green-400 rounded-2xl" href="#">About</a></li>
                <li><a class="hover:bg-green-300 p-3 bg-green-400 rounded-2xl" href="#">Contact</a></li>
            </ul>
        </div>
    </nav>
</template>
