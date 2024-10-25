<script lang="ts">
    import { fly, blur, draw, crossfade, slide } from "svelte/transition";
    import { Button } from "$lib/components/ui/button";
    import Slideshow from "$lib/components/custom/slideshow/slideshow.svelte";
    import {
        Card,
        CardContent,
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
    import { Badge } from "$lib/components/ui/badge";
    import { onMount } from "svelte";

    const features = [
        {
            icon: GitBranch,
            title: "Bootstrap the repo",
            description:
                "Generate your project repository with best practices and optimal structure in just a few clicks.",
        },
        {
            icon: HardDrive,
            title: "Provisioning Cloud Resources",
            description:
                "Automatically set up your cloud infrastructure, saving you time and ensuring scalability from day one.",
        },
        {
            icon: Zap,
            title: "Setup CI/CD Pipeline",
            description:
                "Get a fully configured CI/CD pipeline to streamline your development and deployment processes.",
        },
    ];

    const pricingPlans = [
        {
            title: "Repo Generation",
            price: 19,
            annualPrice: 108,
            features: [
                "1 project included",
                "Add projects: $12/month or $72/year",
            ],
        },
        {
            title: "Repo + Cloud Provisioning",
            price: 39,
            annualPrice: 348,
            features: ["1 project included", "Cloud infrastructure setup"],
        },
        {
            title: "Repo + Cloud + CI/CD",
            price: 59,
            annualPrice: 588,
            features: [
                "1 project included",
                "Cloud infrastructure setup",
                "CI/CD pipeline configuration",
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

<div
    class="flex flex-col min-h-screen"
    style="--dot-bg: white;--dot-color: #888;--dot-size: 1px;--dot-space: 22px; background:
linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
var(--dot-color);"
>
    <header class="px-4 lg:px-6 h-14 flex items-center">
        <div class="flex items-center justify-center flex-1"></div>
        <a
            href="/"
            class="flex items-center justify-center flex-1 relative top-[100px]"
        >
            <img alt="Buzooka" src="/buzooka-logo.svg" width="300" />
        </a>
        <nav class="ml-auto flex gap-4 sm:gap-6 flex-1 justify-end">
            <a
                href="#features"
                class="text-sm font-medium hover:underline underline-offset-4"
                >Features</a
            >
            <a
                href="#pricing"
                class="text-sm font-medium hover:underline underline-offset-4"
                >Pricing</a
            >
            <a
                href="#hire"
                class="text-sm font-medium hover:underline underline-offset-4"
                >Sign Up</a
            >
        </nav>
    </header>

    <main class="flex-1">
        <section
            class="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[linear-gradient(90deg,_var(--dot-bg)_calc(var(--dot-space)_-_var(--dot-size)),_transparent_1%)_center_/_var(--dot-space)_var(--dot-space),_linear-gradient(var(--dot-bg)_calc(var(--dot-space)_-_var(--dot-size)),_transparent_1%)_center_/_var(--dot-space)_var(--dot-space),_var(--dot-color)]"
        >
            <div class="container px-4 md:px-6">
                <div class="flex flex-col items-center space-y-4 text-center">
                    <div class="space-y-2">
                        <h1
                            class="text-2xl font-thin tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none block w-[600px]"
                        >
                            Launch your MVP,<br />
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
                                        Faster!
                                    </span>
                                {/if}
                                {#if id === 2}
                                    <span
                                        transition:blur={{
                                            duration: 200,
                                        }}
                                        class="leading-normal absolute font-mono text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500"
                                    >
                                        in Days!
                                    </span>
                                {/if}
                                {#if id === 3}
                                    <span
                                        transition:blur={{
                                            duration: 200,
                                        }}
                                        class="leading-normal absolute font-mono text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500"
                                    >
                                        Make an Impact!
                                    </span>
                                {/if}
                            </div>
                        </h1>

                        <p
                            class="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
                        >
                            Code, Cloud, and CI/CD, Simplified.
                        </p>
                    </div>
                    <div class="space-x-4">
                        <Button size="lg">Launch Now</Button>
                        <Button variant="outline" size="lg"
                            >Book a Consultation</Button
                        >
                    </div>
                </div>
            </div>
        </section>

        <section
            id="features"
            class="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
            <div class="container px-4 md:px-6">
                <h2
                    class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
                >
                    How?
                </h2>
                <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {#each features as feature}
                        <Card>
                            <CardHeader>
                                <feature.icon
                                    class="h-8 w-8 mb-2 text-primary"
                                />
                                <CardTitle>{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {feature.description}
                            </CardContent>
                        </Card>
                    {/each}
                </div>
            </div>
        </section>

        <section class="w-full py-12 md:py-24 lg:py-32">
            <div class="container px-4 md:px-6">
                <h2
                    class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
                >
                    Who are you?
                </h2>
                <div class="grid gap-6 md:grid-cols-3">
                    {#each ["Founders", "Businesses", "Developers"] as audience}
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

        <section
            class="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
            <div class="container px-4 md:px-6">
                <h2
                    class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
                >
                    How to?
                </h2>
                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {#each ["Choose Your Stack", "Configure Your Project", "Launch and Iterate"] as step}
                        <Card>
                            <CardHeader>
                                <CardTitle>{step}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {#if step === "Choose Your Stack"}
                                    Select from our curated list of modern tech
                                    stacks tailored for different types of
                                    projects.
                                {:else if step === "Configure Your Project"}
                                    Use our intuitive interface to set up your
                                    repository, cloud resources, and CI/CD
                                    pipeline.
                                {:else}
                                    Deploy your MVP with a single click and
                                    start gathering feedback to iterate and
                                    improve.
                                {/if}
                            </CardContent>
                        </Card>
                    {/each}
                </div>
            </div>
        </section>

        <section id="pricing" class="w-full py-12 md:py-24 lg:py-32">
            <div class="container px-4 md:px-6">
                <h2
                    class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
                >
                    Product Pricing
                </h2>
                <div class="grid gap-6 lg:grid-cols-3">
                    {#each pricingPlans as plan}
                        <Card>
                            <CardHeader>
                                <CardTitle>{plan.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p class="text-3xl font-bold">
                                    ${plan.price}/month
                                </p>
                                <p class="text-sm text-gray-500">
                                    or ${plan.annualPrice}/year (save {Math.round(
                                        (1 -
                                            plan.annualPrice /
                                                (plan.price * 12)) *
                                            100,
                                    )}%)
                                </p>
                                <ul class="mt-4 space-y-2">
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
                            <CardFooter>
                                <Button class="w-full">Choose Plan</Button>
                            </CardFooter>
                        </Card>
                    {/each}
                </div>
            </div>
        </section>

        <section
            id="hire"
            class="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
            <div class="container px-4 md:px-6">
                <h2
                    class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
                >
                    Need extra help?
                </h2>
                <div class="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Hire an Architect</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p class="text-3xl font-bold">$199/project</p>
                            <p class="text-sm text-gray-500">
                                Free one-time consultation with Annual
                                Subscription
                            </p>
                            <p class="mt-4">
                                Not sure how it works? Let our expert architect
                                set your project up for success!
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button class="w-full">Book an Architect</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Hire a Developer</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p class="text-3xl font-bold">$699/week</p>
                            <p class="mt-4">
                                Need people to work on the app features? Hire
                                our trusted devs to work on your project!
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button class="w-full">Hire a Developer</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>

        <section
            class="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground"
        >
            <div class="container px-4 md:px-6">
                <div class="flex flex-col items-center space-y-4 text-center">
                    <div class="space-y-2">
                        <h2
                            class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                        >
                            Need a walkthrough? Let's connect!
                        </h2>
                        <p
                            class="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl"
                        >
                            Book a consultation with our experts to see how
                            Buzooka can accelerate your MVP launch.
                        </p>
                    </div>
                    <div class="w-full max-w-sm space-y-2">
                        <Button class="w-full" size="lg" variant="secondary">
                            Book a Consultation
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer
        class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
    >
        <p class="text-xs text-gray-500 dark:text-gray-400">
            © 2024 Buzooka. All rights reserved.
        </p>
        <nav class="sm:ml-auto flex gap-4 sm:gap-6">
            <a href="#" class="text-xs hover:underline underline-offset-4"
                >Terms of Service</a
            >
            <a href="#" class="text-xs hover:underline underline-offset-4"
                >Privacy Policy</a
            >
        </nav>
    </footer>
</div>
