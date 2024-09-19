<!--
INSTRUCTION: Summary: The blank component contains the following two parts:
INSTRUCTION: - To the left: There is an empty div with text on top and bottom.
INSTRUCTION: - To the right: There is an empty div.
INSTRUCTION:
INSTRUCTION: If the user asks you to insert components left and right of each other, first wrap them into `<div class="grid"> </div>` and then use the following syntax:
INSTRUCTION: <div class="grid">
INSTRUCTION:     <!-- these components appear to the left side -->
INSTRUCTION:     <div id="left-side-container" class="flex"> Left side part here </div>
INSTRUCTION:
INSTRUCTION:     <!-- these components appear to the right side -->
INSTRUCTION:     <div id="right-side-container" class="flex"> Right side part here</div>
INSTRUCTION: </div>
-->
<template>
    <div>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <section id="blank-section" class="bg-white dark:bg-gray-900 flex-1">
            <div id="blank-container" class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28 bg-pink-100">
                <div class="flex-1">
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h2 class="text-2xl font-bold mb-4">Shopping List</h2>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="item1">
                                Item 1
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="item1" type="text" placeholder="Apples">
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="item2">
                                Item 2
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="item2" type="text" placeholder="Bread">
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="item3">
                                Item 3
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="item3" type="text" placeholder="Milk">
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Add to Cart
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>  
    </div>
</template>

<script>
export default {
    name: "BlankComponent",
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>
