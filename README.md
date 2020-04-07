# Velaro Visitor Chat

This package allows you to add Velaro Chat to your JavaScript application.

## Installation

**Using NPM:**

`npm install @velaro/visitor-chat`

**Using Yarn:**

`yarn add @velaro/visitor-chat`

## Quick Start

**Using React:**

```tsx
import * as React from "react";
import * as Velaro from "@velaro/visitor-chat";

function useVelaro() {
  React.useEffect(() => {
    Velaro.boot({ siteId: mySiteId });

    return () => {
      Velaro.destroy();
    };
  }, []);
}

export default function MyComponent() {
  useVelaro();
  return <div>hello world</div>;
}
```

**Using Vue.js:**

```html
<template>
  <div>hello world</div>
</template>

<script>
  import * as Velaro from "@velaro/visitor-chat";

  export default {
    mounted() {
      Velaro.boot({ siteId: mySiteId });
    },

    beforeDestroy() {
      Velaro.destroy();
    },
  };
</script>
```

## API Documentation

Each of the following methods will use the `Velaro` class instance. To import the class instance,
add this code to the top of your module.

```ts
import * as Velaro from "@velaro/visitor-chat";
```

**boot**

The boot method is responsible for bootstrapping Velaro chat with necessary configurations and
mounting the chat window to the DOM. This method will also trigger visitor monitoring functions.

```ts
const config = {
  // siteId will be included in your deployment script.
  // This value should not be changed.
  siteId: [your siteId],

  // When groupId is zero, it will send all chats through
  // the default group. To get a specific groupId, change
  // groups in the chat designer and view the deployment
  // script.
  groupId: 0,

  // This option disables inline chat. You can set this to
  // true if you only want to use popout chat or use other
  // api methods without displaying inline chat.
  disableInline: false,

  // This option disables the chat launcher. If you want to
  // customize the behavior or appearance of the chat launcher
  // beyond the capabilities of the chat designer, set this
  // to true and use other API methods to display and hide the
  // chat window and launcher.
  disableLauncher: false,

  // If a chat session should persist across subdomains, this
  // value should be set. For example, if a chat is started on
  // foo.example.com, and the user navigates to bar.example.com,
  // cookieDomain should be set to '.example.com'
  cookieDomain: '',

  // Custom vars allow you to persist custom data with a chat.
  // This unlocks the potential to design custom routing rules
  // and invitation rules and is also useful for certain CRM
  // integrations.
  customVars: {
    customerId: "s9d8fh9s8dgfsdf",
    cartValue: 53.99
  }
};

const callback = () => {
  // this callback is optional
  console.log("fires after the chat window has been rendered to the DOM.");
};

Velaro.boot(config, callback);
```

**destroy**

Destroys the chat instance. This should be called prior to making additional calls to `boot`.

```ts
Velaro.destroy();
```

**mountDynamicButton**

Mounts a chat button within the provided DOM element. This button will automatically update as
agent availability changes. See https://app.velaro.com/#admin/design/chat-designer?groupId=0&section=popout-button to configure the appearance of the button.

```ts
Velaro.mountDynamicButton({
  el: document.getElementById("your-button-container"),
});
```

**isChatAvailable**

Requests availability information for the configured group from Velaro servers.

```ts
Velaro.isChatAvailable((isAvailable: boolean) => {
  console.log("availability:", isAvailable);
});
```

**expand**

Expands the inline chat window.

```ts
Velaro.expand();
```

**collapse**

Collapses the inline chat window.

```ts
Velaro.collapse();
```

**popout**

Pops the chat window out into a new window.

```ts
Velaro.popout();
```

**isExpanded**

Returns true if the chat window is expanded.

```ts
console.log("expanded:", Velaro.isExpanded());
```

**onExpand**

Fires a callback when the chat window has been expanded.

```ts
Velaro.onExpand(() => {
  console.log("expanded.");
});
```

**onCollapse**

Fires a callback when the chat window has been collapsed.

```ts
Velaro.onCollapse(() => {
  console.log("collapsed.");
});
```

**setLauncherVisibility**

Sets the visibility of the inline chat launcher.

```ts
Velaro.setLauncherVisibility("hidden");
Velaro.setLauncherVisibility("visible");
```

**addConversion**

Creates a conversion record.

```ts
Velaro.addConversion({
  // the id of your conversion can be found at
  // https://app.velaro.com/#/admin/visitors/conversions
  conversionId: [your conversion id],

  dollarAmount: 49.99,

  // optional parameters to persist with the conversion
  customData: {
    customerId: '9283gf9823gf98g'
  }
});
```
