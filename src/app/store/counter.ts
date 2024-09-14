import { createEvent, createStore } from "effector";

    export const $counterEntrance = createStore<number>(0);
    export const $counterApartments = createStore<number>(0);

    export const $counterMailboxHeight = createStore<number>(0);
    export const $counterMailboxWidth = createStore<number>(0);

    export const $MailboxModel = createStore<string>("default");

    export const $MailboxBoxForSpam = createStore<boolean>(false);
    export const $MailboxBoxForBatteries = createStore<boolean>(false);
    export const $MailboxNumeration = createStore<boolean>(false);


export const changeCounterEntrance = createEvent<number>();
export const changeCounterApartments = createEvent<number>();

export const changeCounterMailboxHeight = createEvent<number>();
export const changeCounterMailboxWidth = createEvent<number>();

export const changeMailboxModel = createEvent<string>();

export const changeMailboxBoxForSpam = createEvent<boolean>();
export const changeMailboxBoxForBatteries = createEvent<boolean>();
export const changeMailboxNumeration = createEvent<boolean>();


$counterEntrance.on(changeCounterEntrance, (_, state) => state)
$counterApartments.on(changeCounterApartments, (_, state) => state)

$counterMailboxHeight.on(changeCounterMailboxHeight, (_, state) => state)
$counterMailboxWidth.on(changeCounterMailboxWidth, (_, state) => state)

$MailboxModel.on(changeMailboxModel, (_, state) => state)

$MailboxBoxForSpam.on(changeMailboxBoxForSpam, (_, state) => state)
$MailboxBoxForBatteries.on(changeMailboxBoxForBatteries, (_, state) => state)
$MailboxNumeration.on(changeMailboxNumeration, (_, state) => state)