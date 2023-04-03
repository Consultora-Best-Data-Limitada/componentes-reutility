<template>
  <GridColumn
    overflow="hidden"
    row-gap="0.5rem"
    background-color="background"
  >
    <GridRow
      column-gap="0.5rem"
      align-items="flex-end"
      grid-auto-columns="13rem"
    >
      <FilterDatePicker
        v-model="fechaRange"
        range
        label="Fecha"
        :max-date="new Date()"
        placeholder="Seleccione"
      />
      <FilterDatePicker
        v-model="fechaNormal"
        label="Fecha"
        :min-date="new Date()"
        placeholder="Seleccione"
      />
      <SearchTextField
        v-model="search"
        placeholder="Buscar"
      />
      <FilterSelect
        v-model="filterSelectNormal"
        :items="items"
        item-value="id"
        label="Usuarios"
        item-title="name"
        placeholder="Seleccione"
      />
      <FilterSelect
        v-model="filterSelectMultiple"
        multiple
        return-object
        :items="items"
        item-value="id"
        label="Usuarios"
        item-title="name"
        placeholder="Seleccione"
        :text-multiple="filterSelectMultipleText"
      />
    </GridRow>
    <HeaderTabs
      v-model="tab"
      :items="tabs"
      color="complementario-2"
    />
    <GridRow
      column-gap="0.5rem"
      align-items="flex-end"
      justify-content="flex-start"
    >
      <TextContainer
        color="secundario"
        predefined-style="h1"
      >
        H1
      </TextContainer>
      <TextContainer
        color="secundario"
        predefined-style="h2"
      >
        H2
      </TextContainer>
      <TextContainer
        color="secundario"
        predefined-style="subtitle-1"
      >
        Subtitle 1
      </TextContainer>
      <TextContainer
        color="secundario"
        predefined-style="subtitle-2"
      >
        Subtitle 2
      </TextContainer>
      <TextContainer
        color="secundario"
        predefined-style="body-1"
      >
        Body 1
      </TextContainer>
      <TextContainer
        color="secundario"
        predefined-style="body-2"
      >
        Body 2
      </TextContainer>
      <TextContainer
        color="secundario"
        predefined-style="caption"
      >
        Caption
      </TextContainer>
      <TextContainer
        font-size="2rem"
        font-weight="300"
        line-height="2rem"
        font-family="monospace"
        color="acento-principal"
        letter-spacing="0.125rem"
      >
        Custom
      </TextContainer>
      <TextContainer
        clickable
        padding="0.25rem"
        hover-color="error"
        border-radius="0.25rem"
        hover-background="neutro-2"
        active-background="neutro-3"
        active-color="acento-principal"
      >
        Clickable
      </TextContainer>
      <TextContainer
        special-text="Hola *mundo* hola que pasa *prueba* jesus"
      />
    </GridRow>
    <GridRow background-color="black">
      <PanelTitle
        closable
        icon-size="2.5rem"
        predefined-style="h1"
        text-color="neutro-1"
      >
        Título formulario
      </PanelTitle>

    </GridRow>
    <GridRow
      padding="0.5rem 0"
      background-color="secundario"
      column-gap="0.5rem"
      grid-template-columns="1fr 1fr 1fr"
    >
      <FormTextField
        v-model="formTextField"
        dark
        label="Nombre*:"
        placeholder="Escriba nombre"
      />
      <FormSelect
        v-model="formSelectNormal"
        dark
        clearable
        searchable
        return-object
        :items="items"
        item-value="id"
        label="Usuario*:"
        item-title="name"
        placeholder="Seleccione"
      />
      <FormDatePicker
        v-model="formFechaNormal"
        dark
        disabled
        label="Fecha*:"
        placeholder="Seleccione"
      />
    </GridRow>
    <GridRow
      column-gap="0.5rem"
      grid-template-columns="1fr 1fr 1fr"
    >
      <FormTextField
        v-model="formTextField"
        label="Nombre*:"
        placeholder="Escriba nombre"
      />
      <FormSelect
        v-model="formSelectNormal"
        clearable
        searchable
        return-object
        :items="items"
        item-value="id"
        label="Usuario*:"
        item-title="name"
        placeholder="Seleccione"
      />
      <FormDatePicker
        v-model="formFechaNormal"
        label="Fecha*:"
        placeholder="Seleccione"
      />
    </GridRow>
    <GridRow
      column-gap="0.5rem"
      grid-template-columns="1fr 1fr 1fr"
    >
      <FormTextField
        v-model="formTextField"
        label="Nombre*:"
        error-message="Error"
        placeholder="Escriba nombre"
      />
      <FormSelect
        v-model="formSelectNormal"
        clearable
        searchable
        return-object
        :items="items"
        item-value="id"
        label="Usuario*:"
        item-title="name"
        error-message="Error"
        placeholder="Seleccione"
      />
      <FormDatePicker
        v-model="formFechaNormal"
        label="Fecha*:"
        error-message="Error"
        placeholder="Seleccione"
      />
    </GridRow>
    <GridRow
      column-gap="0.5rem"
      grid-template-columns="1fr 1fr 1fr"
    >
      <FormTextField
        v-model="formTextField"
        disabled
        clearable
        label="Nombre*:"
        placeholder="Escriba nombre"
      />
      <FormSelect
        v-model="formSelectNormal"
        disabled
        clearable
        searchable
        return-object
        :items="items"
        item-value="id"
        label="Usuario*:"
        item-title="name"
        placeholder="Seleccione"
      />
      <FormDatePicker
        v-model="formFechaNormal"
        disabled
        label="Fecha*:"
        placeholder="Seleccione"
      />
    </GridRow>
    <GridRow
      column-gap="0.5rem"
      grid-template-columns="1fr 1fr 1fr"
    >
      <FormTextField
        v-model="formTextField"
        outlined
        label="Nombre*:"
        placeholder="Escriba nombre"
      />
      <FormSelect
        v-model="formSelectNormal"
        outlined
        clearable
        searchable
        return-object
        :items="items"
        label="Usuario"
        item-value="id"
        item-title="name"
        placeholder="Seleccione"
      />
      <FormDatePicker
        v-model="formFechaNormal"
        outlined
        label="Fecha*:"
        placeholder="Seleccione"
      />
    </GridRow>
    <GridRow
      column-gap="0.5rem"
      grid-template-columns="1fr 1fr 1fr"
    >
      <InformationText
        label="Nombre:"
        text-transform="uppercase"
      >
        {{ formTextField || "Value" }}
      </InformationText>
      <InformationText label="Usuario:">
        {{ informationUsuario }}
      </InformationText>
      <InformationText label="Fecha:">
        {{ informationFecha }}
      </InformationText>
    </GridRow>
    <GridRow
      column-gap="0.5rem"
      grid-auto-columns="13rem"
    >
      <CustomButton
        height="2.5rem"
        append-icon="fas-plus"
        color="acento-secundario"
      >
        Botón
      </CustomButton>
      <CustomButton
        height="2.5rem"
        preppend-icon="fas-plus"
        color="acento-principal"
      >
        Botón
      </CustomButton>
      <CustomButton
        outlined
        height="2.5rem"
        color="acento-principal"
      >
        Botón
      </CustomButton>
      <CustomButton
        outlined
        height="2.5rem"
        append-icon="fas-plus"
        preppend-icon="fas-check"
        color="acento-secundario"
      >
        Botón
      </CustomButton>
      <CustomButton
        disabled
        height="2.5rem"
        color="acento-principal"
      >
        Botón
      </CustomButton>
      <CustomButton
        outlined
        disabled
        height="2.5rem"
        color="acento-principal"
      >
        Botón
      </CustomButton>
      <CustomButton
        loading
        height="2.5rem"
        append-icon="fas-plus"
        color="acento-secundario"
      >
        Botón
      </CustomButton>
    </GridRow>
    <GridRow
      column-gap="0.5rem"
      justify-content="flex-start"
    >
      <CustomButton
        height="2.5rem"
        color="acento-secundario"
        @click="abrirConfirmationDialog"
      >
        Abrir dialogo confirmación
      </CustomButton>
      <CustomButton
        height="2.5rem"
        color="acento-principal"
        @click="abrirSuccessDialog"
      >
        Abrir dialogo éxito
      </CustomButton>
    </GridRow>
    <GridRow
      column-gap="0.5rem"
      justify-content="flex-end"
    >
      <CustomMenu
      >
        <template #activator>
          <IconButton
            icon="fas-home"
            color="acento-principal"
          >
            Tooltip
          </IconButton>
        </template>
        <template #default="{ close }">
          <GridColumn
            padding="1rem"
            border-radius="1rem"
            background-color="neutro-1"
          >
            <button @click="close">
              Cerrar
            </button>
            <TextContainer
              white-space="nowrap"
            >
              Hola mundo
            </TextContainer>
          </GridColumn>
        </template>
      </CustomMenu>
      <IconButton
        icon="fas-home"
        color="neutro-1"
        container-size="2rem"
        background-color="acento-secundario"
      >
      </IconButton>
      <IconButton
        disabled
        icon="fas-home"
        color="acento-principal"
      >
        Ver Informacion
      </IconButton>
      <IconButton
        disabled
        size="0.75rem"
        icon="fas-home"
        color="neutro-1"
        container-size="2rem"
        background-color="acento-principal"
      />
      <CheckBox v-model="checkboxValue"/>
      <CheckBox
        v-model="checkboxValue"
        disabled
      />
      <CheckBox
        v-model="checkboxValue"
        box-color="neutro-4"
        box-icon="fas-circle"
        checked-color="error"
        checked-icon="fas-circle-check"
      />
      <PageSwitch
        v-model="switchValue"
        tooltip="Tooltip"
      />
      <PageSwitch
        v-model="switchValue"
        disabled
      />
      <PageSwitch
        v-model="switchValue"
        active-color="error"
        color="acento-principal"
      />
      <FontAwesomeIcon
        size="2rem"
        name="fas-croissant"
        color="complementario-1"
      />
      <IconButton
        icon="fas-home"
        color="acento-principal"
      >
        Tooltip
      </IconButton>
      <IconButton
        icon="fas-home"
        color="acento-principal"
      >
        Tooltip
      </IconButton>
    </GridRow>
    <DataTable
      :items-per-page="3"
      :items="items"
      :headers="headers"
      selected="1"
      compare-selected-with="id"
      disabled-key="id"
      disabled-value="2"
    >
      <template #name="{ item }">
        <DataTableItem
          text-align="left"
          text-transform="uppercase"
          :selected="item.id === '1'"
          :disabled="item.id === '2'"
        >
          Nombre: {{ item.name }}
        </DataTableItem>
      </template>
      <template #acciones>
        <GridRow
          column-gap="0.5rem"
          justify-content="flex-start"
        >
          <IconButton
            icon="fas-pen-to-square"
            color="acento-principal"
          >
            Editar
          </IconButton>
          <IconButton
            icon="fas-circle-info"
            color="acento-principal"
          >
            Informacion
          </IconButton>
          <PageSwitch
            v-model="switchValue"
            tooltip="Habilitar"
          />
        </GridRow>
      </template>
    </DataTable>
    <ConfirmationDialog
      v-model="confirmationDialog.model"
      :title="confirmationDialog.title"
      :subtitle="confirmationDialog.subtitle"
      @click:yes="confirmationDialog.yes"
      @click:no="cerrarConfirmationDialog"
    />
    <SuccessDialog
      :text="successDialog.text"
      :icon="successDialog.icon"
      :subtitle="successDialog.subtitle"
      :model-value="successDialog.model"
      @close="cerrarSuccessDialog"
    />
  </GridColumn>
</template>

<script setup lang="ts">
// Vue
import {computed, reactive, ref} from "vue";
import CustomMenu from "@/plugin/components/CustomMenu.vue";
import GridColumn from "@/plugin/components/GridColumn.vue";
import TextContainer from "@/plugin/components/TextContainer.vue";
import PanelTitle from "@/plugin/components/PanelTitle.vue";

interface User {
  id: string;
  name: string;
}

// Data

const tab = ref(0);
const tabs = ["Tab 1", "Tab 2", "Tab 3"];

const confirmationDialog: IConfirmationDialog = reactive({
  model: false,
  title: "Confirmación",
  subtitle: "Subtítulo",
  yes: () => {
    cerrarConfirmationDialog();
  },
});

const successDialog: ISuccessDialog = reactive({
  model: false,
  text: "¡Éxito!",
  icon: "fas-check",
  subtitle: "Subtítulo",
});

const headers: DataTableHeader[] = [
  {
    text: "ID",
    value: "id",
    sort: (valueA, valueB) => {
      const numberA = parseInt(valueA);
      const numberB = parseInt(valueB);
      return numberA - numberB;
    },
  },
  {
    text: "Nombre",
    value: "name",
  },
  {
    text: "",
    value: "acciones",
    sortable: false,
  },
];

const menuValue = ref(true);

const fechaRange = ref<Date[]>([]);
const fechaNormal = ref<Date | null>(null);

const filterSelectMultiple = ref<User[]>([]);
const filterSelectNormal = ref<string | null>(null);

const search = ref("");

const formTextField = ref("");
const formSelectNormal = ref<User | null>(null);

const formFechaNormal = ref<Date | null>(null);

const checkboxValue = ref(false);
const switchValue = ref(false);

const items = [...new Array(30)].map((_, i) => ({
  id: (i + 1).toString(),
  name: `Usuario ${i + 1}`,
})) as User[];

// Computed

const filterSelectMultipleText = computed(() => {
  if (filterSelectMultiple.value.length === 0) return "";
  if (filterSelectMultiple.value.length === 1) {
    return filterSelectMultiple.value[0].name;
  }
  return `${filterSelectMultiple.value.length} seleccionados`;
});

const informationUsuario = computed(() => formSelectNormal.value?.name ?? "Value");

const informationFecha = computed(() => formFechaNormal.value?.toISOString() ?? "Value");

// Methods

const abrirConfirmationDialog = () => {
  confirmationDialog.model = true;
};

const cerrarConfirmationDialog = () => {
  confirmationDialog.model = false;
};

const abrirSuccessDialog = () => {
  successDialog.model = true;
};

const cerrarSuccessDialog = () => {
  successDialog.model = false;
};
</script>
