<script lang="ts">
  import { Mic } from 'lucide-svelte';
  import { onMount, createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher<{ text: string }>();

  let recognition: any = null;
  let isRecording = false;
  let isSupported = false;

  onMount(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        (window as any).SpeechRecognition ||
        (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        isSupported = true;
        recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.lang = 'en-US';
        recognition.interimResults = false;

        recognition.onresult = (event: any) => {
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              const transcript = event.results[i][0].transcript;
              dispatch('text', transcript);
            }
          }
        };

        recognition.onerror = (event: any) => {
          console.error('Speech recognition error', event.error);
          isRecording = false;
        };

        recognition.onend = () => {
          isRecording = false;
        };
      }
    }
  });

  const toggleRecording = () => {
    if (!recognition) return;
    if (isRecording) {
      recognition.stop();
      isRecording = false;
    } else {
      recognition.start();
      isRecording = true;
    }
  };
</script>

{#if isSupported}
  <button
    type="button"
    on:click={toggleRecording}
    class="p-2 rounded-lg transition-colors {isRecording
      ? 'text-red-500 bg-red-50 hover:bg-red-100'
      : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'}"
  >
    <Mic size={20} class={isRecording ? 'animate-pulse' : ''} />
  </button>
{/if}
