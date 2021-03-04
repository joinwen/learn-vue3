<template>
  <div>
    <style-variables-test />
    <script-setup-test />
    <script-setup-test2 />
    <script-setup-test2 />
    <scoped-styles-test />
  </div>
</template>
<script>
import StyleVariablesTest from "@/views/style-variables/StyleVariablesTest";
import ScriptSetupTest from "@/views/script-setup/ScriptSetupTest";
import ScriptSetupTest2 from "@/views/script-setup/ScriptSetupTest2";
import ScopedStylesTest from "@/views/scoped-styles/ScopedStylesTest";
export default {
  components: {ScopedStylesTest, ScriptSetupTest2, ScriptSetupTest, StyleVariablesTest}
};
</script>
