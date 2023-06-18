<script setup lang="ts">
  import { useUserStore } from '@/stores/userStore';
  import { useNavStore } from '@/stores/navStore';
  import { storeToRefs } from 'pinia';

  const route = useRoute();

  const activeConvoId = ref('asdf3kn32j3k');

  const style = route.meta.layout;

  const isActive = computed(() => {
    return route.path === '/h/convo/1';
  });

  const userStore = useUserStore();
  const { userOrgs } = storeToRefs(userStore);

  const navStore = useNavStore();
  const { filteredOrg } = storeToRefs(navStore);

  function getConvoOrg(convo) {
    return this.userOrgs.find((org) => org.id === convo.orgId);
  }

  const convos = ref([
    {
      convoId: 'asdf3kn32j3k',
      lastMessage: 'Hello, this is a random message',
      lastMessageTime: '8:52am',
      lastMessageAuthor: {
        participantId: '40741422732a1d921099767bd8c2072e1c335ffc',
        name: 'Omar McPizza',
        avatar: '',
        contactId: 'hello@iamomar.com',
        via: 'email'
      },
      participants: [{}],
      orgId: '23n32k234',
      tags: [{ tagId: 'asdf3kn32j3k', name: 'General', color: 'indigo' }]
    },
    {
      convoId: 'randomConversation1',
      lastMessage: 'This is a random conversation with Pizza Inc',
      lastMessageTime: '10:23am',
      lastMessageAuthor: {
        participantId: '1234567890',
        name: 'John Doe',
        avatar: '',
        contactId: 'john@doe.com',
        via: 'email'
      },
      participants: [{}],
      orgId: '23n32k234',
      tags: [{ tagId: 'randomTagId1', name: 'General', color: 'green' }]
    },
    {
      convoId: 'randomConversation2',
      lastMessage: 'Another random conversation with Pizza Inc',
      lastMessageTime: '2:45pm',
      lastMessageAuthor: {
        participantId: '0987654321',
        name: 'Jane Smith',
        avatar: '',
        contactId: 'jane@smith.com',
        via: 'email'
      },
      participants: [{}],
      orgId: '23n32k234',
      tags: [{ tagId: 'randomTagId2', name: 'Sales', color: 'blue' }]
    },
    {
      convoId: 'randomConversation3',
      lastMessage: 'A conversation with UnInbox Inc',
      lastMessageTime: '5:12pm',
      lastMessageAuthor: {
        participantId: '4567890123',
        name: 'Mike Johnson',
        avatar: '',
        contactId: 'mike@johnson.com',
        via: 'email'
      },
      participants: [{}],
      orgId: '324kgto',
      tags: [{ tagId: 'randomTagId3', name: 'Support', color: 'red' }]
    },
    {
      convoId: 'randomConversation4',
      lastMessage: 'Random conversation with ACME Inc',
      lastMessageTime: '9:30am',
      lastMessageAuthor: {
        participantId: '9876543210',
        name: 'Sarah Thompson',
        avatar: '',
        contactId: 'sarah@thompson.com',
        via: 'email'
      },
      participants: [{}],
      orgId: '324kgsadto',
      tags: [{ tagId: 'randomTagId4', name: 'Marketing', color: 'orange' }]
    }
  ]);

  const visibleConvos = computed(() => {
    if (filteredOrg.value === '') {
      return convos.value;
    }
    return convos.value.filter((convo) => convo.orgId === filteredOrg.value);
  });
</script>

<template>
  <div class="flex-col flex gap-3 h-full overflow-hidden scroll">
    <div
      v-for="convo in visibleConvos"
      :key="convo.convoId"
      class="w-full transition-all">
      <UTooltip
        :text="`${convo.lastMessageAuthor.name} @ ${convo.lastMessageTime}`"
        class="w-full">
        <div
          class="border-2 p-1 rounded-3xl flex flex-row gap-4 items-center w-full hover:bg-sand-4 hover:border-sand-8 hover:ring-2 hover:ring-sand-8 hover:ring-offset-0 hover:ring-offset-sand-5"
          :class="
            activeConvoId === convo.convoId
              ? 'border-sand-7 bg-sand-5 ring-sand-7 ring-1 ring-offset-0 ring-offset-sand-5'
              : 'border-sand-7 bg-sand-3'
          ">
          <div class="w-fit">
            <UAvatar
              size="lg"
              :src="convo.lastMessageAuthor.avatar"
              :alt="convo.lastMessageAuthor.name"
              :ui="{
                background:
                  activeConvoId === convo.convoId ? 'bg-sand-5' : 'bg-sand-3'
              }" />
          </div>
          <p class="grow text-sm line-clamp-2 mr-4">
            {{ convo.lastMessage }}
          </p>
          <div class="flex flex-col pr-2">
            <div v-if="userOrgs.length > 1 && filteredOrg !== convo.orgId">
              <template v-if="getConvoOrg(convo)">
                <img
                  v-if="getConvoOrg(convo).avatar"
                  :src="getConvoOrg(convo).avatar"
                  alt="Organization Avatar" />
                <span
                  v-else
                  class="emoji-text"
                  v-html="getConvoOrg(convo).emoji"></span>
              </template>
            </div>
            <div>
              <UIcon
                :name="
                  convo.lastMessageAuthor.via === 'email'
                    ? 'i-ph-envelope'
                    : 'i-ph-chat-circle-dots'
                " />
            </div>
          </div>
        </div>
      </UTooltip>
    </div>
  </div>
</template>
