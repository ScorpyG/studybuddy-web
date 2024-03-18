<script>
    export default {
        name: 'ProfileFormSkeleton',
    }
</script>

<template>
    <div class="flex flex-col border-2 rounded-md p-4 gap-3 m-auto max-w-xs sm:max-w-xl">
        <div>
            <div class="flex flex-row gap-2 items-center">
                <div class="h-16 w-16 rounded-full animate-pulse bg-slate-300"></div>
                <div class="w-1/2 h-10 rounded-md animate-pulse bg-slate-300"></div>
            </div>
            <div class="mt-4 w-full h-60 rounded-md animate-pulse bg-slate-300"></div>

            <div class="mt-4 w-1/2 h-10 rounded-md animate-pulse bg-slate-300"></div>
            <div class="mt-4 w-full h-32 rounded-md animate-pulse bg-slate-300"></div>

            <div class="flex flex-row flex-wrap gap-2 mt-4">
                <div class="py-2 px-4 rounded-full w-28 h-8 bg-slate-300 animate-pulse"></div>
                <div class="py-2 px-4 rounded-full w-24 h-8 bg-slate-300 animate-pulse"></div>
                <div class="py-2 px-4 rounded-full w-36 h-8 bg-slate-300 animate-pulse"></div>
                <div class="py-2 px-4 rounded-full w-20 h-8 bg-slate-300 animate-pulse"></div>
                <div class="py-2 px-4 rounded-full w-32 h-8 bg-slate-300 animate-pulse"></div>
                <div class="py-2 px-4 rounded-full w-36 h-8 bg-slate-300 animate-pulse"></div>
                <div class="py-2 px-4 rounded-full w-20 h-8 bg-slate-300 animate-pulse"></div>
            </div>
        </div>
        <div class="mt-2 rounded-md p-2.5 font-bold text-white transition-all w-full h-11 animate-pulse bg-slate-300"></div>
    </div>
</template>