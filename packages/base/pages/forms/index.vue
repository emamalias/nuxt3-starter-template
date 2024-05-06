<template>
  <NuxtLayout>
    <template #default>
      <div class="w-full">
        <h1 class="text-2xl font-semibold my-4">All fields mode: </h1>
        <FormKit 
          type="form" 
          :form-class="submitted ? 'hide' : 'show'"
          @submit="submitHandler"
          :actions="false"
          #default="{ value }"
          :config="{ validationVisibility: 'submit' }"
        >

          <FormKit
            type="button"
            label="Regular button"
            help="You can use the label prop."
          />
          
          <FormKit 
            type="email" 
            label="Email address" 
            help="Please enter your email address."
            name="email"
            value=""
            validation="required|email"
            placeholder="hello@example.com"
            :validation-visibility="validateOn"
          />
          <FormKit
            type="checkbox"
            label="Terms and Conditions"
            help="Do you agree to our terms of service?"
            name="terms"
            validation="accepted"
            :validation-visibility="validateOn"
          />
          <FormKit
            type="color"
            name="color"
            value=""
            label="Select a color"
            help="Select your favorite color."
            validation="required"
            :validation-visibility="validateOn"
          />
          <FormKit
            type="date"
            name="date"
            value=""
            label="Birthday"
            help="Enter your birth day"
            validation="required|date_before:2010-01-01"
            :validation-visibility="validateOn"
          />
          <FormKit
            type="datetime-local"
            value="2020-03-13T18:22"
            label="End of the world"
            help="When will the end of the world take place?"
            validation="required|date_after"
            :validation-visibility="validateOn"
          />
          <FormKit
            type="file"
            label="Your files"
            name="files"
            accept=".pdf,.doc,.docx,.xml,.md,.csv"
            help="This input starts with files already “attached”."
            multiple="true"
            validation="required"
            :validation-visibility="validateOn"
          />
          <FormKit
            type="month"
            help="What month were you born?"
            label="Birth month"
            name="birth_month"
            value=""
            validation="required"
            :validation-visibility="validateOn"
          />
          <FormKit
            type="number"
            help="What temperature should the house be?"
            label="Thermostat"
            name="temperature"
            value=""
            step="1"
            validation="required"
            :validation-visibility="validateOn"
          />
          <FormKit
            type="password"
            label="A fancy password input"
            name="password"
            value=""
            prefix-icon="password"
            suffix-icon="eyeClosed"
            @suffix-icon-click="(node: any, e: Event) => {
              node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
              node.props.type = node.props.type === 'password' ? 'text' : 'password'
            }"
            validation="required"
            :validation-visibility="validateOn"
          />
          <FormKit
            type="radio"
            label="Preferred transportation"
            name="radio"
            value=""
            :options="['E-Bike', 'E-Scooter', 'Electric car', 'Walking', 'Space tube']"
            help="How do you like to get around?"
            validation="required"
            :validation-visibility="validateOn"
          />
          <FormKit
            type="range"
            label="Volume"
            name="range"
            value=""
            min="0"
            max="11"
            help="Select your volume level."
            validation="required"
            :validation-visibility="validateOn"
          />
          <FormKit
            type="select"
            label="Which country is the smallest?"
            name="select"
            value=""
            :options="[
              'Monaco',
              'Vatican City',
              'Maldives',
              'Tuvalu',
            ]"
            validation="required"
            :validation-visibility="validateOn"
          />
          <FormKit
            type="tel"
            label="Phone number"
            name="phone"
            value=""
            placeholder="xxx-xxx-xxxx"
            validation="required|matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
            :validation-messages="{
              matches: 'Phone number must be in the format xxx-xxx-xxxx',
            }"
            :validation-visibility="validateOn"
          />
          <FormKit
            type="text"
            label="Your username"
            name="username"
            value=""
            help="Pick a username people will remember!"
            validation="required"
            :validation-visibility="validateOn"
          />
          <FormKit
            type="textarea"
            label="Your Essay"
            value=""
            name="instructions"
            placeholder="Remember to write in complete sentences."
            :help="`${value.instructions ? value.instructions.length : 0} / 120`"
            validation="required|length:0,120"
            :validation-messages="{
              length: 'Instructions cannot be more than 120 characters.',
            }"
            :validation-visibility="validateOn"
          />
          <FormKit
            type="time"
            label="Time"
            name="time"
            value=""
            help="What time will go home today?"
            validation="required"
            :validation-visibility="validateOn"
          />
          <FormKit
            type="url"
            label="Favorite website"
            name="url"
            placeholder="https://www.example.com..."
            validation="required|url"
            help="What is your favorite website?"
            :validation-visibility="validateOn"
          />
          <FormKit
            type="week"
            label="Vacation"
            name="week"
            help="What week will you travel to Fiji?"
            value=""
            validation="required"
            :validation-visibility="validateOn"
          />
          <FormKit type="submit" label="Submit" />
          <pre wrap class="bg-gray-200 p-2">{{ value }}</pre>
        </FormKit>
      </div>
      
      <div v-if="submitted">
        <h2 class="text-xl text-green-500">Submission successful!</h2>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">

const submitted = ref(false)

const validateOn = 'live'

const submitHandler = async () => {
  // Let's pretend this is an ajax request:
  await new Promise((r) => setTimeout(r, 1000))
  submitted.value = true
}

useSeoMeta({
  title: 'Nuxt3 Base App',
  description: ''
});
</script>