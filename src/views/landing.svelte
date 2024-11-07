<script lang="ts">
    import { fly, blur, draw, crossfade, slide } from "svelte/transition";
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input/index.js";
    import {
        Card,
        CardContent,
        CardDescription,
        CardFooter,
        CardHeader,
        CardTitle,
    } from "$lib/components/ui/card";
    import {
        CheckCircle,
        Code,
        Rocket,
        Zap,
        Users,
        HardDrive,
        GitBranch,
        ArrowRight,
    } from "lucide-svelte";
    import { onMount } from "svelte";

    const features = [
        {
            title: "Bootstrap the repo",
            description:
                "Choose a template, and generate your multi-app repositories with best practices and optimal structure in just a few clicks. Includes Mobile, Desktop, Web, Services, DB & Workers",
        },
        {
            title: "Provision Cloud Resources",
            description:
                "Automatically set up your cloud infrastructure apt for your apps, saving you time and ensuring scalability from day one. Choose which cloud provider you would like to use - AWS, GCP, Azure, Digital Ocean, Netlify.",
        },
        {
            title: "Setup CI/CD Pipeline",
            description:
                "Get a fully configured CI/CD pipeline to streamline your development and deployment processes. Choose between blue/green deployment, canary deployment",
        },
    ];

    const pricingPlans = [
        {
            title: "Scout",
            subtitle: "Devs, Prototyping",
            price: 39,
            annualPrice: 399,
            features: [
                "Unlimited Projects",
                "Upto 5 Apps per project",
                "Repo Generation",
                "Both Pre-built & Custom Templates",
                "Free one-time consultation call",
            ],
        },
        {
            title: "Gunner",
            subtitle: "Founders, Startups",
            price: 69,
            annualPrice: 699,
            features: [
                "Unlimited Projects",
                "Upto 10 Apps per project",
                "Repo Generation",
                "Both Pre-built & Custom Templates",
                "Cloud infrastructure setup",
                "Manual App Deployments",
                "Cloud infrastructure teardown",
                "Free one-time consultation call",
            ],
        },
        {
            title: "Squadron",
            subtitle: "Startups, Enterprise",
            price: 89,
            annualPrice: 999,
            features: [
                "Unlimited Projects",
                "Upto 100 Apps per project",
                "Repo Generation",
                "Both Pre-built & Custom Templates",
                "Cloud infrastructure setup",
                "Manual App Deployments",
                "Cloud infrastructure teardown",
                "CI/CD pipeline configuration setup",
                "Deployment Strategy Configuration",
                "Automatic App Deployments",
                "Free one-time consultation call",
            ],
        },
    ];

    let id = 1;

    onMount(() => {
        setInterval(() => {
            if (id > 0 && id < 3) {
                id = id + 1;
            } else {
                id = 1;
            }
        }, 3000);
    });

    const [send, receive] = crossfade({});
</script>

<header
    class="px-4 lg:px-6 h-14 flex items-center py-[32px] pt-[34px] pb-[30px] sticky top-0"
    style="--dot-bg: white;--dot-color: #888;--dot-size: 1px;--dot-space: 22px; background:
linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
var(--dot-color);"
>
    <div class="flex flex-1">
        <a
            href="/"
            class="items-left justify-start relative top-[0px] left-[24px]"
        >
            <img
                alt="Buzooka"
                src="/buzooka.svg"
                height="44px"
                style="height: 44px;"
            />
        </a>
    </div>
    <!-- <a
        href="/"
        class="flex items-center justify-center flex-1 relative top-[-8px] left-[0px]"
    >
        <img alt="Buzooka" src="/buzooka-logo.svg" width="200" />
    </a> -->
    <nav class="ml-auto flex gap-4 sm:gap-6 flex-1 justify-end">
        <a
            href="#features"
            class="text-sm font-medium hover:underline underline-offset-4 py-3"
            >What</a
        >
        <a
            href="#pricing"
            class="text-sm font-medium hover:underline underline-offset-4 py-3"
            >Plans</a
        >
        <a
            href="#join-squad"
            class="text-sm underline font-medium hover:underline underline-offset-4 py-3"
            >Join Squad!</a
        >
    </nav>
</header>
<div
    class="flex flex-col min-h-screen"
    style="--dot-bg: white;--dot-color: #888;--dot-size: 1px;--dot-space: 22px; background:
linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
var(--dot-color);"
>
    <main class="flex-1">
        <section
            class="h-[80vh] mt-50 w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[linear-gradient(90deg,_var(--dot-bg)_calc(var(--dot-space)_-_var(--dot-size)),_transparent_1%)_center_/_var(--dot-space)_var(--dot-space),_linear-gradient(var(--dot-bg)_calc(var(--dot-space)_-_var(--dot-size)),_transparent_1%)_center_/_var(--dot-space)_var(--dot-space),_var(--dot-color)]"
        >
            <div
                class="container px-4 md:px-6 absolute left-[50%] -translate-x-1/2"
            >
                <div class="flex flex-col items-center space-y-4 text-center">
                    <div class="space-y-6 mb-4">
                        <h1
                            class="text-sm uppercase font-mono font-medium text-slate-600"
                        >
                            <span class="font-bold">A Startup Studio</span> - Tools
                            for Product Development
                        </h1>
                        <h2
                            class="text-2xl font-sans sm:text-4xl md:text-5xl lg:text-6xl/none block w-[600px] pt-0"
                        >
                            <span class="italic font-thin text-slate-600"
                                >Launch your <mark class="px-3">MVP</mark> ,</span
                            ><br />
                            <div
                                class="relative h-24 text-center flex items-center justify-center"
                            >
                                {#if id === 1}
                                    <span
                                        transition:blur={{
                                            duration: 200,
                                        }}
                                        class="leading-normal absolute font-mono text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500"
                                    >
                                        faster!
                                    </span>
                                {/if}
                                {#if id === 2}
                                    <span
                                        transition:blur={{
                                            duration: 200,
                                        }}
                                        class="leading-normal absolute font-mono text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500"
                                    >
                                        make an impact
                                    </span>
                                {/if}
                                {#if id === 3}
                                    <span
                                        transition:blur={{
                                            duration: 200,
                                        }}
                                        class="leading-normal absolute font-mono text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500"
                                    >
                                        in just days!
                                    </span>
                                {/if}
                            </div>
                        </h2>

                        <h3
                            class="mx-auto italic font-thin max-w-[700px] text-slate-600 md:text-xl dark:text-gray-400 pt-8"
                        >
                            <span class="font-medium">Code</span>,
                            <span class="font-medium">Cloud</span>, and
                            <span class="font-medium">CI/CD</span> simplified.
                        </h3>
                    </div>
                    <div class="flex gap-0">
                        <Input
                            type="email"
                            placeholder="Email"
                            class="max-w-xs w-[300px] h-[47px] rounded-none rounded-l-lg outline-0 border-slate-700 bg-white placeholder-shown:bg-cyan-50 text-slate-950 font-bold"
                        />
                        <Button
                            size="xs"
                            class="px-9 py-3 rounded-none rounded-r-lg border-solid border-[1px] border-l-0 border-slate-700"
                        >
                            <span
                                class="leading-normal font-mono font-bold text-transparent bg-slate-950 bg-clip-text bg-gradient-to-r from-cyan-100 to-pink-100"
                            >
                                Join Squad
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        <section
            id="features"
            class="w-full py-12 md:py-12 lg:py-16 bg-gradient-to-r from-cyan-50 to-pink-50 dark:bg-gray-800"
        >
            <div class="container px-4 md:px-6">
                <h2
                    class="text-3xl italic font-thin text-slate-600 sm:text-4xl md:text-5xl text-center mb-8"
                >
                    What?
                </h2>
                <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <div class="flex gap-6 mb-4">
                                <img
                                    alt="React"
                                    src="/react.svg"
                                    width="30"
                                    class="mb-2"
                                />
                                <img
                                    alt="Svelte"
                                    src="/svelte-logo.svg"
                                    width="28"
                                    class="mb-2"
                                />
                                <img
                                    alt="Node"
                                    src="/node_js.svg"
                                    width="30"
                                    class="mb-2"
                                />
                                <img
                                    alt="Typescript"
                                    src="/ts-logo.svg"
                                    width="28"
                                    class="mb-2"
                                />
                                <img
                                    alt="Vue"
                                    src="/vue.svg"
                                    width="30"
                                    class="mb-2"
                                />
                                <img
                                    alt="Python"
                                    src="/python.svg"
                                    width="30"
                                    class="mb-2"
                                />
                                <img
                                    alt="Fluttr"
                                    src="/flutter-logo.svg"
                                    width="26"
                                    class="mb-2"
                                />
                            </div>
                            <CardTitle>{features[0].title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {features[0].description}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div class="flex gap-6 mb-4">
                                <img
                                    alt="AWS"
                                    src="/aws.svg"
                                    width="30"
                                    class="mb-2"
                                />
                                <img
                                    alt="GCP"
                                    src="/gcp.svg"
                                    width="30"
                                    class="mb-2"
                                />
                                <img
                                    alt="Azure"
                                    src="/azure.svg"
                                    width="30"
                                    class="mb-2"
                                />
                                <img
                                    alt="Digital Ocean"
                                    src="/do.svg"
                                    width="26"
                                    class="mb-2"
                                />
                                <img
                                    alt="Netlify"
                                    src="/netlify.svg"
                                    width="30"
                                    class="mb-2"
                                />
                            </div>
                            <CardTitle>{features[1].title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {features[1].description}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div class="flex gap-6 mb-4">
                                <img
                                    alt="Git"
                                    src="/git.svg"
                                    width="30"
                                    class="mb-2"
                                />
                                <img
                                    alt="Linux"
                                    src="/ubuntu.svg"
                                    width="30"
                                    class="mb-2"
                                />
                                <img
                                    alt="Docker"
                                    src="/docker.svg"
                                    width="30"
                                    class="mb-2"
                                />
                                <img
                                    alt="Android"
                                    src="/android.svg"
                                    width="30"
                                    class="mb-2"
                                />
                                <img
                                    alt="iOS"
                                    src="/ios.svg"
                                    width="30"
                                    class="mb-2"
                                />
                                <img
                                    alt="MacOS"
                                    src="/macos.svg"
                                    width="30"
                                    class="mb-2"
                                />
                                <img
                                    alt="Windows"
                                    src="/microsoft.svg"
                                    width="30"
                                    class="mb-2"
                                />
                            </div>
                            <CardTitle>{features[2].title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {features[2].description}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <section class="w-full py-12 md:py-12 lg:py-16">
            <div class="container px-4 md:px-6">
                <p
                    class="text-3xl font-thin text-slate-600 sm:text-4xl md:text-5xl pl-8"
                >
                    <span
                        class="leading-normal text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500"
                    >
                        Minimize setup time.<br />Maximize development time.
                    </span>
                </p>
            </div>
        </section>

        <section
            class="w-full py-12 md:py-12 lg:py-16 bg-gradient-to-r from-cyan-50 to-pink-50 dark:bg-gray-800"
        >
            <div class="container px-4 md:px-6">
                <h2
                    class="text-3xl italic font-thin text-slate-600 sm:text-4xl md:text-5xl text-center mb-8"
                >
                    Who is this for?
                </h2>
                <div class="grid gap-6 md:grid-cols-3">
                    {#each ["Developers", "Founders", "Businesses"] as audience}
                        <Card>
                            <CardHeader>
                                <CardTitle>{audience}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {#if audience === "Founders"}
                                    Launch your startup idea quickly and
                                    efficiently, focusing on your product
                                    instead of infrastructure.
                                {:else if audience === "Businesses"}
                                    Accelerate your digital transformation with
                                    rapid MVP development and deployment.
                                {:else}
                                    Streamline your workflow and focus on
                                    writing great code, not configuring
                                    environments.
                                {/if}
                            </CardContent>
                        </Card>
                    {/each}
                </div>
            </div>
        </section>

        <section id="pricing" class="w-full py-12 md:py-12 lg:py-16">
            <div class="container px-4 md:px-6">
                <h2
                    class="text-3xl italic font-thin text-slate-600 sm:text-4xl md:text-5xl text-center mb-8"
                >
                    Choose your pack!
                </h2>
                <div class="grid gap-6 lg:grid-cols-3">
                    {#each pricingPlans as plan}
                        <Card class="flex flex-col">
                            <CardHeader>
                                <CardTitle>{plan.title}</CardTitle>
                                <CardDescription
                                    >{plan.subtitle}</CardDescription
                                >
                            </CardHeader>
                            <CardContent class="flex-1">
                                <!-- <p class="text-2xl font-bold leading-normal">
                                    ${plan.annualPrice}/year
                                    <span class="text-sm text-cyan-600"
                                        >(save {Math.round(
                                            (1 -
                                                plan.annualPrice /
                                                    (plan.price * 12)) *
                                                100,
                                        )}%)</span
                                    >
                                </p>
                                <p class="text-sm text-gray-500 leading-normal">
                                    or ${plan.price}/month
                                </p> -->
                                <ul class="space-y-2">
                                    {#each plan.features as feature}
                                        <li class="flex items-center">
                                            <CheckCircle
                                                class="h-4 w-4 mr-2 text-primary"
                                            />
                                            {feature}
                                        </li>
                                    {/each}
                                </ul>
                            </CardContent>
                            <!-- <CardFooter>
                                <Button class="w-full">Choose Plan</Button>
                            </CardFooter> -->
                        </Card>
                    {/each}
                </div>
            </div>
        </section>

        <section
            id="hire"
            class="w-full py-12 md:py-12 lg:py-16 bg-gradient-to-r from-cyan-50 to-pink-50 dark:bg-gray-800"
        >
            <div class="container px-4 md:px-6">
                <h2
                    class="text-3xl italic font-thin text-slate-600 sm:text-4xl md:text-5xl text-center mb-4"
                >
                    Need extra help?
                </h2>

                <p
                    class="text-sm text-gray-600 leading-normal mb-8 sm:text-sm text-center uppercase"
                >
                    Competitively priced
                </p>
                <div class="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle class="font-normal"
                                >Hire an Architect</CardTitle
                            >
                        </CardHeader>
                        <CardContent>
                            <!-- <p class="text-2xl font-bold leading-normal">
                                $999/week
                            </p> -->
                            <!-- <p class="text-sm text-gray-600 leading-normal">
                                One-time consultation included with Annual
                                Subscription
                            </p> -->
                            <p>
                                Not sure how it works? Let our expert architect
                                set your project up for success!
                            </p>
                        </CardContent>
                        <!-- <CardFooter>
                            <Button class="w-full">Book an Architect</Button>
                        </CardFooter> -->
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle class="font-normal"
                                >Hire a Developer</CardTitle
                            >
                        </CardHeader>
                        <CardContent>
                            <!-- <p class="text-2xl font-bold leading-normal">
                                $699/week
                            </p> -->
                            <!-- <p class="text-sm text-gray-600 leading-normal">
                                Shortdev
                            </p> -->
                            <p>
                                Short of hands to work on the app features? Hire
                                our trusted devs to work for you!
                            </p>
                        </CardContent>
                        <!-- <CardFooter>
                            <Button class="w-full">Hire a Developer</Button>
                        </CardFooter> -->
                    </Card>
                </div>
            </div>
        </section>

        <section
            id="join-squad"
            class="w-full py-12 md:py-12 lg:py-16 bg-primary text-primary-foreground"
            style="--dot-bg: hsl(217, 33%, 10%);--dot-color: #888;--dot-size: 1px;--dot-space: 22px; background:
    linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
    linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
    var(--dot-color);"
        >
            <div class="container px-4 md:px-6">
                <div class="flex flex-col items-center space-y-8 text-center">
                    <!-- <div class="space-y-4">
                        <h2
                            class="text-3xl italic font-thin text-slate-300 sm:text-4xl md:text-5xl text-center mb-8"
                        >
                            Need a walkthrough? Let's connect!
                        </h2>
                        <p
                            class="mx-auto max-w-[700px] font-thin text-slate-200 md:text-xl mb-16"
                        >
                            Book a consultation and accelerate your MVP launch
                        </p>
                    </div> -->

                    <div class="space-y-1">
                        <h2
                            class="text-3xl italic font-thin text-slate-300 sm:text-4xl md:text-5xl text-center mb-20"
                        >
                            You are only limited by your imagination!
                        </h2>
                        <p
                            class="mx-auto max-w-[700px] text-slate-200 text-2xl mt-8 mb-8 font-handwriting md:leading-normal italic"
                        >
                            Become an early bird!
                        </p>
                    </div>
                    <div class="flex gap-0">
                        <Input
                            type="email"
                            placeholder="Email"
                            class="max-w-xs w-[300px] h-[47px] rounded-none rounded-l-lg border-slate-700 focus-visible:outline-0 text-slate-50 font-bold placeholder:text-slate-100 bg-cyan-950 bg-slate-900 placeholder-shown:bg-cyan-950 focus-visible:bg-slate-900 focus-visible:bg-slate-900"
                        />
                        <Button
                            size="xs"
                            class="px-8 rounded-none rounded-r-lg border-solid border-[1px] border-l-0 border-slate-700 bg-gradient-to-r from-cyan-100 to-pink-100 hover:from-cyan-300 hover:to-pink-300 font-bold transition-all duration-500 ease-in py-3"
                        >
                            <span class="leading-normal font-mono text-black">
                                Join Squad
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer
        class="flex gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 bg-slate-950"
    >
        <p class="text-xs text-slate-100 dark:text-gray-400 leading-normal">
            © 2024 Buzooka. All rights reserved.
        </p>
        <!-- <nav class="sm:ml-auto flex gap-4 sm:gap-6">
            <a href="#" class="text-xs hover:underline underline-offset-4"
                >Terms of Service</a
            >
            <a href="#" class="text-xs hover:underline underline-offset-4"
                >Privacy Policy</a
            >
        </nav> -->
    </footer>
</div>
