<script lang="ts">
    import { Button } from "$lib/components/ui/button";
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
    } from "lucide-svelte";

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
</script>

<div class="flex flex-col min-h-screen">
    <header class="px-4 lg:px-6 h-14 flex items-center">
        <a href="/" class="flex items-center justify-center">
            <Rocket class="h-6 w-6 mr-2" />
            <span class="font-bold">Buzooka</span>
        </a>
        <nav class="ml-auto flex gap-4 sm:gap-6">
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
                >Hire</a
            >
        </nav>
    </header>

    <main class="flex-1">
        <section class="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div class="container px-4 md:px-6">
                <div class="flex flex-col items-center space-y-4 text-center">
                    <div class="space-y-2">
                        <h1
                            class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
                        >
                            Launch your MVP, Faster!
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
                    Set Up Your Tech Stack in Minutes
                </h2>
                <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {#each features as feature}
                        <Card>
                            <CardHeader>
                                <svelte:component
                                    this={feature.icon}
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
