<script>
export default {
    name: "FeaturedCourses",
}
</script>

<template>
<!--Feature Section-->
<section class="mt-20 lg:mt-[140px]">
    <h1 class="heading-tertiory text-center mb-10 md:mb-16"> Featured Courses </h1>
    <div class="max-w-[400px] sm:max-w-[700px] lg:max-w-7xl w-full sm:px-6 lg:px-8 mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
        <div class="bg-white rounded grap-10 overflow-hidden shadow-card">
            <router-link :to="{ name: 'single' }">
                <img srcset="https://laravel-courses.com/storage/courses/3af6d790-51f4-42cf-89db-26740e1bf353.png 2000w, https://laravel-courses.com/storage/courses/1168288b-5e18-4c67-a489-640a02a46198.png 1200w, https://laravel-courses.com/storage/courses/e8f6ef53-4023-4677-8af9-d28e27f87c4d.png 400w"
                    sizes="(max-width: 600px) 400px, (max-width: 1200px) 1200px, 2000px"
                    src="https://laravel-courses.com/storage/courses/1168288b-5e18-4c67-a489-640a02a46198.png"
                    alt="PEST Driven Laravel" class="w-full h-auto object-contain">
            </router-link>
            <div class="px-6 pb-5">
                <div class="mt-7 flex justify-between items-center gap-4 mb-4">
                    <router-link :to="{ name: 'single' }" class="text-lg-primary w-full hover:underline">PEST Driven Laravel</router-link>
                </div>
                <div>
                    <div class="flex items-center mb-2">
                        <div class="flex items-center">
                            <img src="https://laravel-courses.com/storage/thumbnails/default/56/tp/g7t7058gcgwk00s48cwww.png?p=authors%2Fa489f89a-4866-4c10-961f-5fa6526d9709.png&amp;s=pd&amp;smartcrop=28x28"
                                alt="Christoph Rumpel" class="w-7 h-7 object-contain flex shrink-0 rounded-full">
                        </div>
                        <h4 class="text-sm-primary w-full leading-5 ml-2"> Christoph Rumpel </h4>
                    </div>
                    <div class="mt-3">
                        <div class="flex items-center gap-3 mt-6">
                            <p
                                class="bg-parrot-100 text-sm-primary py-1.5 px-1.5 rounded-[3px] flex items-center gap-1.5 w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none">
                                    <path fill="#464646"
                                        d="M7.493 0A7.08 7.08 0 0 0 .417 7.083a7.08 7.08 0 0 0 7.076 7.084 7.088 7.088 0 0 0 7.09-7.084A7.087 7.087 0 0 0 7.493 0ZM7.5 12.75a5.665 5.665 0 0 1-5.667-5.667A5.665 5.665 0 0 1 7.5 1.417a5.665 5.665 0 0 1 5.667 5.666A5.665 5.665 0 0 1 7.5 12.75Zm-.156-9.208h-.042a.508.508 0 0 0-.51.51v3.343c0 .248.127.482.347.61l2.94 1.763a.505.505 0 0 0 .763-.358.502.502 0 0 0-.247-.513l-2.74-1.63V4.053a.508.508 0 0 0-.51-.51Z">
                                    </path>
                                </svg> 06 h 17 min
                            </p>
                            <p
                                class="text-sm-primary bg-accent-100 py-1.5 px-1.5 rounded-[3px] flex items-center gap-1.5 w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" fill="none">
                                    <path fill="#464646"
                                        d="M14.063 12.188h-3.75V0h3.75v12.188Zm-2.813-.938h1.875V.937H11.25V11.25Zm-1.875.938h-3.75V3.75h3.75v8.438Zm-2.813-.938h1.875V4.687H6.563v6.563Zm-1.875.938H.938V6.561h3.75v5.625Zm-2.812-.938H3.75V7.5H1.875v3.75Z">
                                    </path>
                                </svg> Beginner
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white rounded overflow-hidden shadow-card">
            <RouterLink :to="{ name: 'single'}">
                <img srcset="https://laravel-courses.com/storage/courses/4d3d4fca-a33c-40c7-ba2d-4e23db49a0ec.png 2000w, https://laravel-courses.com/storage/courses/fe693edb-b8b8-4aa4-8818-3d9a97f76c9b.png 1200w, https://laravel-courses.com/storage/courses/18909833-0342-4597-b903-c4b017e1760f.png 400w"
                    sizes="(max-width: 600px) 400px, (max-width: 1200px) 1200px, 2000px"
                    src="https://laravel-courses.com/storage/courses/fe693edb-b8b8-4aa4-8818-3d9a97f76c9b.png"
                    alt="Mastering Laravel Validation Rules" class="w-full h-auto object-contain">
                </RouterLink>
            <div class="px-6 pb-5">
                <div class="mt-7 flex justify-between items-center gap-4 mb-4">
                    <RouterLink :to="{ name: 'single'}" class="text-lg-primary w-full hover:underline">Mastering Laravel Validation
                        Rules</RouterLink>
                </div>
                <div>
                    <div class="flex items-center mb-2">
                        <div class="flex items-center">
                            <img src="https://laravel-courses.com/storage/thumbnails/default/8z/p1/nkwmbcw08s04s000cwkg0.png?p=authors%2F8a21d7d4-58c7-47f6-993f-72fafc671030.png&amp;s=pd&amp;smartcrop=28x28"
                                alt="Joel Clermont" class="w-7 h-7 object-contain flex shrink-0 rounded-full">
                            <img src="https://laravel-courses.com/storage/thumbnails/default/1t/gg/pmh7dmas0co0wow4gksok.png?p=authors%2F106fdb67-5829-4f02-9017-a454d8f2d376.png&amp;s=pd&amp;smartcrop=28x28"
                                alt="Aaron Saray"
                                class="w-7 h-7 object-contain border border-white rounded-full -translate-x-2 flex shrink-0">
                        </div>
                        <h4 class="text-sm-primary w-full leading-5 ml-2"> Joel Clermont &amp; Aaron Saray </h4>
                    </div>
                    <div class="mt-3">
                        <div class="flex items-center gap-3 mt-6">
                            <p
                                class="text-sm-primary bg-accent-100 py-1.5 px-1.5 rounded-[3px] flex items-center gap-1.5 w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" fill="none">
                                    <path fill="#464646"
                                        d="M14.063 12.188h-3.75V0h3.75v12.188Zm-2.813-.938h1.875V.937H11.25V11.25Zm-1.875.938h-3.75V3.75h3.75v8.438Zm-2.813-.938h1.875V4.687H6.563v6.563Zm-1.875.938H.938V6.561h3.75v5.625Zm-2.812-.938H3.75V7.5H1.875v3.75Z">
                                    </path>
                                </svg> Beginner
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white rounded overflow-hidden shadow-card">
            <RouterLink :to="{ name: 'single'}">
                <img srcset="https://laravel-courses.com/storage/courses/73432585-1a11-4144-8117-0b171506d9b3.png 2000w, https://laravel-courses.com/storage/courses/392a17fb-7b83-4663-a75f-82bcb0a23519.png 1200w, https://laravel-courses.com/storage/courses/c865ccb8-6953-492f-aaa8-01a4c77bd504.png 400w"
                    sizes="(max-width: 600px) 400px, (max-width: 1200px) 1200px, 2000px"
                    src="https://laravel-courses.com/storage/courses/392a17fb-7b83-4663-a75f-82bcb0a23519.png"
                    alt="Testing Laravel" class="w-full h-auto object-contain">
            </RouterLink>
            <div class="px-6 pb-5">
                <div class="mt-7 flex justify-between items-center gap-4 mb-4">
                    <RouterLink :to="{ name: 'single'}" class="text-lg-primary w-full hover:underline">Testing Laravel</RouterLink>
                </div>
                <div>
                    <div class="flex items-center mb-2">
                        <div class="flex items-center">
                            <img src="https://laravel-courses.com/storage/thumbnails/default/3n/cl/gvpzjn40os4ssc8080088.png?p=authors%2F5eb9fd04-7c8d-4f04-8946-b09ad0a8750a.png&amp;s=pd&amp;smartcrop=28x28"
                                alt="Brent Roose" class="w-7 h-7 object-contain flex shrink-0 rounded-full">
                            <img src="https://laravel-courses.com/storage/thumbnails/default/dw/6b/ce76mg8owkockcco8ww4k.png?p=authors%2F04ff15e2-69b1-4110-a7a8-0ec15616abaf.png&amp;s=pd&amp;smartcrop=28x28"
                                alt="Freek Van der Herten"
                                class="w-7 h-7 object-contain border border-white rounded-full -translate-x-2 flex shrink-0">
                        </div>
                        <h4 class="text-sm-primary w-full leading-5 ml-2"> Brent Roose &amp; Freek Van der Herten </h4>
                    </div>
                    <div class="mt-3">
                        <div class="flex items-center gap-3 mt-6">
                            <p
                                class="text-sm-primary bg-parrot-100 py-1.5 px-1.5 rounded-[3px] flex items-center gap-1.5 w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none">
                                    <path fill="#464646"
                                        d="M7.493 0A7.08 7.08 0 0 0 .417 7.083a7.08 7.08 0 0 0 7.076 7.084 7.088 7.088 0 0 0 7.09-7.084A7.087 7.087 0 0 0 7.493 0ZM7.5 12.75a5.665 5.665 0 0 1-5.667-5.667A5.665 5.665 0 0 1 7.5 1.417a5.665 5.665 0 0 1 5.667 5.666A5.665 5.665 0 0 1 7.5 12.75Zm-.156-9.208h-.042a.508.508 0 0 0-.51.51v3.343c0 .248.127.482.347.61l2.94 1.763a.505.505 0 0 0 .763-.358.502.502 0 0 0-.247-.513l-2.74-1.63V4.053a.508.508 0 0 0-.51-.51Z">
                                    </path>
                                </svg> 06 h 00 min
                            </p>
                            <p
                                class="text-sm-primary bg-accent-100 py-1.5 px-1.5 rounded-[3px] flex items-center gap-1.5 w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" fill="none">
                                    <path fill="#464646"
                                        d="M14.063 12.188h-3.75V0h3.75v12.188Zm-2.813-.938h1.875V.937H11.25V11.25Zm-1.875.938h-3.75V3.75h3.75v8.438Zm-2.813-.938h1.875V4.687H6.563v6.563Zm-1.875.938H.938V6.561h3.75v5.625Zm-2.812-.938H3.75V7.5H1.875v3.75Z">
                                    </path>
                                </svg> Intermediate
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white rounded overflow-hidden shadow-card">
            <RouterLink :to="{ name: 'single'}">
                <img srcset="https://laravel-courses.com/storage/courses/09fac06d-eb12-4828-8003-25e0e1c3bdd5.png 2000w, https://laravel-courses.com/storage/courses/c9c5fd6f-1705-410d-bb4b-66cd64a9d5ed.png 1200w, https://laravel-courses.com/storage/courses/2d68add9-163b-48f6-b3d1-88774ab7ed27.png 400w"
                    sizes="(max-width: 600px) 400px, (max-width: 1200px) 1200px, 2000px"
                    src="https://laravel-courses.com/storage/courses/c9c5fd6f-1705-410d-bb4b-66cd64a9d5ed.png"
                    alt="PHP For Beginners" class="w-full h-auto object-contain">
            </RouterLink>
            <div class="px-6 pb-5">
                <div class="mt-7 flex justify-between items-center gap-4 mb-4">
                    <RouterLink :to="{ name: 'single'}" class="text-lg-primary w-full hover:underline">PHP For Beginners</RouterLink>
                </div>
                <div>
                    <div class="flex items-center mb-2">
                        <div class="flex items-center">
                            <img src="https://laravel-courses.com/storage/thumbnails/default/4s/4g/qb05vxus40ogocsw4sk88.png?p=authors%2Fd60f2e38-05f7-4608-b129-2ab901941771.png&amp;s=pd&amp;smartcrop=28x28"
                                alt="Jeffrey Way" class="w-7 h-7 object-contain flex shrink-0 rounded-full">
                        </div>
                        <h4 class="text-sm-primary w-full leading-5 ml-2"> Jeffrey Way </h4>
                    </div>
                    <div class="mt-3">
                        <div class="flex items-center gap-3 mt-6">
                            <p
                                class="text-sm-primary bg-parrot-100 py-1.5 px-1.5 rounded-[3px] flex items-center gap-1.5 w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none">
                                    <path fill="#464646"
                                        d="M7.493 0A7.08 7.08 0 0 0 .417 7.083a7.08 7.08 0 0 0 7.076 7.084 7.088 7.088 0 0 0 7.09-7.084A7.087 7.087 0 0 0 7.493 0ZM7.5 12.75a5.665 5.665 0 0 1-5.667-5.667A5.665 5.665 0 0 1 7.5 1.417a5.665 5.665 0 0 1 5.667 5.666A5.665 5.665 0 0 1 7.5 12.75Zm-.156-9.208h-.042a.508.508 0 0 0-.51.51v3.343c0 .248.127.482.347.61l2.94 1.763a.505.505 0 0 0 .763-.358.502.502 0 0 0-.247-.513l-2.74-1.63V4.053a.508.508 0 0 0-.51-.51Z">
                                    </path>
                                </svg> 04 h 05 min
                            </p>
                            <p
                                class="text-sm-primary bg-accent-100 py-1.5 px-1.5 rounded-[3px] flex items-center gap-1.5 w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" fill="none">
                                    <path fill="#464646"
                                        d="M14.063 12.188h-3.75V0h3.75v12.188Zm-2.813-.938h1.875V.937H11.25V11.25Zm-1.875.938h-3.75V3.75h3.75v8.438Zm-2.813-.938h1.875V4.687H6.563v6.563Zm-1.875.938H.938V6.561h3.75v5.625Zm-2.812-.938H3.75V7.5H1.875v3.75Z">
                                    </path>
                                </svg> Beginner
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white rounded overflow-hidden shadow-card">
            <RouterLink :to="{ name: 'single'}">
                <img srcset="https://laravel-courses.com/storage/courses/82ec52d4-7898-4d82-9b72-995ed0fcdb06.png 2000w, https://laravel-courses.com/storage/courses/4f69da91-87df-4bdf-b299-11889167dc72.png 1200w, https://laravel-courses.com/storage/courses/feec4eaf-6de2-41e8-bb82-13b5a9c36ad6.png 400w"
                    sizes="(max-width: 600px) 400px, (max-width: 1200px) 1200px, 2000px"
                    src="https://laravel-courses.com/storage/courses/4f69da91-87df-4bdf-b299-11889167dc72.png"
                    alt="Writing Readable PHP" class="w-full h-auto object-contain">
            </RouterLink>
            <div class="px-6 pb-5">
                <div class="mt-7 flex justify-between items-center gap-4 mb-4">
                    <RouterLink :to="{ name: 'single'}" class="text-lg-primary w-full hover:underline">Writing Readable PHP</RouterLink>
                </div>
                <div>
                    <div class="flex items-center mb-2">
                        <div class="flex items-center">
                            <img src="https://laravel-courses.com/storage/thumbnails/default/56/tp/g7t7058gcgwk00s48cwww.png?p=authors%2Fa489f89a-4866-4c10-961f-5fa6526d9709.png&amp;s=pd&amp;smartcrop=28x28"
                                alt="Christoph Rumpel" class="w-7 h-7 object-contain flex shrink-0 rounded-full">
                            <img src="https://laravel-courses.com/storage/thumbnails/default/dw/6b/ce76mg8owkockcco8ww4k.png?p=authors%2F04ff15e2-69b1-4110-a7a8-0ec15616abaf.png&amp;s=pd&amp;smartcrop=28x28"
                                alt="Freek Van der Herten"
                                class="w-7 h-7 object-contain border border-white rounded-full -translate-x-2 flex shrink-0">
                        </div>
                        <h4 class="text-sm-primary w-full leading-5 ml-2"> Christoph Rumpel &amp; Freek Van der Herten
                        </h4>
                    </div>
                    <div class="mt-3">
                        <div class="flex items-center gap-3 mt-6">
                            <p
                                class="text-sm-primary bg-parrot-100 py-1.5 px-1.5 rounded-[3px] flex items-center gap-1.5 w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none">
                                    <path fill="#464646"
                                        d="M7.493 0A7.08 7.08 0 0 0 .417 7.083a7.08 7.08 0 0 0 7.076 7.084 7.088 7.088 0 0 0 7.09-7.084A7.087 7.087 0 0 0 7.493 0ZM7.5 12.75a5.665 5.665 0 0 1-5.667-5.667A5.665 5.665 0 0 1 7.5 1.417a5.665 5.665 0 0 1 5.667 5.666A5.665 5.665 0 0 1 7.5 12.75Zm-.156-9.208h-.042a.508.508 0 0 0-.51.51v3.343c0 .248.127.482.347.61l2.94 1.763a.505.505 0 0 0 .763-.358.502.502 0 0 0-.247-.513l-2.74-1.63V4.053a.508.508 0 0 0-.51-.51Z">
                                    </path>
                                </svg> 02 h 37 min
                            </p>
                            <p
                                class="text-sm-primary bg-accent-100 py-1.5 px-1.5 rounded-[3px] flex items-center gap-1.5 w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" fill="none">
                                    <path fill="#464646"
                                        d="M14.063 12.188h-3.75V0h3.75v12.188Zm-2.813-.938h1.875V.937H11.25V11.25Zm-1.875.938h-3.75V3.75h3.75v8.438Zm-2.813-.938h1.875V4.687H6.563v6.563Zm-1.875.938H.938V6.561h3.75v5.625Zm-2.812-.938H3.75V7.5H1.875v3.75Z">
                                    </path>
                                </svg> Beginner
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white rounded overflow-hidden shadow-card">
            <RouterLink :to="{ name: 'single'}">
                <img srcset="https://laravel-courses.com/storage/courses/4960c69f-174b-43d2-a868-d913de6678a9.png 2000w, https://laravel-courses.com/storage/courses/598e2682-0977-496c-b274-29f8101966ea.png 1200w, https://laravel-courses.com/storage/courses/6baba847-ec06-4be5-8967-5f3ab5d42f0e.png 400w"
                    sizes="(max-width: 600px) 400px, (max-width: 1200px) 1200px, 2000px"
                    src="https://laravel-courses.com/storage/courses/598e2682-0977-496c-b274-29f8101966ea.png"
                    alt="Laravel Queues in Action" class="w-full h-auto object-contain">
            </RouterLink>
            <div class="px-6 pb-5">
                <div class="mt-7 flex justify-between items-center gap-4 mb-4">
                    <RouterLink :to="{ name: 'single'}" class="text-lg-primary w-full hover:underline">Laravel Queues in Action</RouterLink>
                </div>
                <div>
                    <div class="flex items-center mb-2">
                        <div class="flex items-center">
                            <img src="https://laravel-courses.com/storage/thumbnails/default/20/u3/dg5y8u5cocc8ogco8ckgg.png?p=authors%2F31a436d0-f246-41fe-8097-e3546f6af15b.png&amp;s=pd&amp;smartcrop=28x28"
                                alt="Mohamed Said" class="w-7 h-7 object-contain flex shrink-0 rounded-full">
                        </div>
                        <h4 class="text-sm-primary w-full leading-5 ml-2"> Mohamed Said </h4>
                    </div>
                    <div class="mt-3">
                        <div class="flex items-center gap-3 mt-6">
                            <p
                                class="text-sm-primary bg-accent-100 py-1.5 px-1.5 rounded-[3px] flex items-center gap-1.5 w-max">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" fill="none">
                                    <path fill="#464646"
                                        d="M14.063 12.188h-3.75V0h3.75v12.188Zm-2.813-.938h1.875V.937H11.25V11.25Zm-1.875.938h-3.75V3.75h3.75v8.438Zm-2.813-.938h1.875V4.687H6.563v6.563Zm-1.875.938H.938V6.561h3.75v5.625Zm-2.812-.938H3.75V7.5H1.875v3.75Z">
                                    </path>
                                </svg> Intermediate
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-center mt-12 mb-12">
        <a href="https://laravel-courses.com/courses">
            <button class="btn-primary text-white h-14 w-32"> Browse all </button>
        </a>
    </div>
</section>
</template>