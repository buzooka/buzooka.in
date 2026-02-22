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
      ? 'text-red-500 bg-red-50 dark:bg-red-950/30 hover:bg-red-100'
      : 'text-muted-foreground hover:text-foreground hover:bg-muted'}"
    aria-label={isRecording ? 'Stop voice recording' : 'Start voice recording'}
  >
    <Mic size={20} class={isRecording ? 'animate-pulse' : ''} />
  </button>
{/if}
