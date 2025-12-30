<script lang="ts">
  import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSeparator,
    Input
  } from '$lib/components';
</script>

<Card class="gap-8 py-8">
  <CardHeader class="text-center">
    <CardTitle class="text-2xl">Create an account</CardTitle>
    <CardDescription class="text-base">Start your journey with us today</CardDescription>
  </CardHeader>
  <CardContent class="px-10">
    <form>
      <FieldGroup>
        <Field>
          <Button variant="outline" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                fill="currentColor"
              />
            </svg>
            Sign up with Google
          </Button>
        </Field>
        <FieldSeparator class="*:data-[slot=field-separator-content]:bg-card">
          or continue with
        </FieldSeparator>
        <Field>
          <FieldLabel for="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="Your email address" required />
        </Field>
        <Field>
          <div class="flex items-center">
            <FieldLabel for="password">Password</FieldLabel>
            <a href="/" class="ms-auto text-sm underline-offset-4 hover:underline">
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" placeholder="Your password" required />
        </Field>
        <Field class="gap-6">
          <Button type="submit">Sign up</Button>
          <FieldDescription class="text-center">
            Already have an account? <a href="/">Log in</a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  </CardContent>
</Card>
