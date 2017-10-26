<style lang="less">
@import './common.less';
@import '../../../node_modules/simplemde/dist/simplemde.min.css';
.CodeMirror, .CodeMirror-scroll {
  min-height: 450px !important;
}
.CodeMirror {
  height: 400px;
}

</style>
<template>
  <div>
    <Row class="margin-top-20">
      <Col span="16" offset="4">
      <div class="markdown-con">
        <Card>
          <textarea id="iview_admin_markdown_editor" style="display:none;"></textarea>
        </Card>
      </div>
      </Col>
    </Row>
    <Row class='margin-top-20'>
      <Col justify='center' span='8' offset='10'>
      <Button type="primary" shape="circle">保存草稿</Button>
      <Button type="primary" shape="circle">保存</Button>
      </Col>
    </Row>
  </div>
</template>
<script>
import SimpleMDE from 'simplemde';
export default {
  name: 'markdown-editor',
  mounted() {
    new SimpleMDE({
      element: document.getElementById('iview_admin_markdown_editor'),
      toolbar: ['bold', 'italic', 'strikethrough', 'heading', 'heading-smaller', 'heading-bigger', 'heading-1', 'heading-2', 'heading-3', '|', 'code', 'quote', 'unordered-list', 'clean-block', '|', 'link', 'image', 'table', 'horizontal-rule', '|', 'preview', 'side-by-side', 'guide']
    });
  }
};

</script>
