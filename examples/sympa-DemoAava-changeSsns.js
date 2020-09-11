const fs = require("fs")

const tempSSNs = [
  "160679-938T",
  "120260-992U",
  "150890-932D",
  "200817-922F",
  "250824-994U",
  "130423-957D",
  "040275-933M",
  "030829-993W",
  "101044-952K",
  "030641-9577",
  "070139-9213",
  "090884-984N",
  "070804-911C",
  "230759-995T",
  "110721-9947",
  "110472-9695",
  "010365-976A",
  "221053-916F",
  "080540-9461",
  "090726-936B",
  "150942-901U",
  "290944-9886",
  "170418-992U",
  "170723-9528",
  "061045-931K",
  "290572-9277",
  "040141-991X",
  "190862-969Y",
  "091073-924H",
  "031044-9201",
  "020175-908R",
  "020711-987L",
  "080917-9083",
  "040219-985V",
  "280158-954L",
  "140718-9831",
  "150449-927E",
  "111138-9148",
  "160876-9811",
  "040771-942X",
  "270859-9602",
  "130220-9626",
  "240221-955A",
  "230492-9393",
  "230902-938V",
  "050673-947E",
  "220673-9661",
  "270580-925X",
  "050675-993E",
  "090926-9381",
  "061041-9549",
  "261124-985L",
  "230178-987L",
  "040555-980D",
  "290572-974R",
  "300808-900W",
  "270339-959U",
  "100422-917X",
  "200697-9757",
  "110993-9190",
  "220839-924H",
  "141064-908W",
  "241124-972W",
  "100222-984F",
  "280136-915N",
  "290902-926B",
  "020389-904U",
  "150614-910F",
  "211013-9387",
  "130923-9441",
  "050508-978V",
  "110926-9667",
  "141042-9353",
  "271016-937U",
  "070708-976P",
  "240597-938T",
  "230458-983R",
  "270219-926T",
  "070245-9413",
  "080572-989N",
  "081086-968M",
  "030229-9046",
  "121191-983T",
  "230262-904L",
  "221091-9767",
  "230560-9522",
  "020215-949C",
  "270191-991N",
  "210110-986R",
  "100960-910J",
  "200764-9302",
  "100217-904L",
  "150569-9826",
  "081051-9822",
  "280362-994J",
  "190312-9093",
  "050149-956H",
  "120676-938E",
  "210991-9575",
  "300721-9579",
  "240675-988J",
  "010868-998U",
  "070616-913X",
  "300317-9272",
  "140617-995B",
  "010606-928Y",
  "130359-924U",
  "120365-9707",
  "220680-9433",
  "170681-9146",
  "250797-9725",
  "200177-932M",
  "290843-906F",
  "170292-961A",
  "101046-9224",
  "200968-960N",
  "061185-983C",
  "130584-9934",
  "190735-943B",
  "090773-982Y",
  "191013-905V",
  "110375-945B",
  "290516-923M",
  "030661-973W",
  "240898-935C",
  "300304-986L",
  "270686-931F",
  "020477-9202",
  "200135-9402",
  "140808-9196",
  "200696-955A",
  "170279-952N",
  "100490-9706",
  "030577-919F",
  "100535-963K",
  "130158-938D",
  "260992-992S",
  "280936-9807",
  "080920-997R",
  "230856-935W",
  "210794-915Y",
  "100227-925V",
  "020848-974J",
  "120597-952H",
  "210695-912A",
  "030237-9967",
  "250424-972W",
  "260279-9403",
  "210516-933T",
  "240846-9448",
  "220401-900P",
  "221084-983M",
  "290136-952H",
  "241071-9439",
  "180556-948N",
  "171064-9750",
  "200587-9534",
  "260717-963V",
  "030589-900Y",
  "100657-914F",
  "021096-919S",
  "060850-922Y",
  "020409-930U",
  "030584-926H",
  "191103-9097",
  "200452-943Y",
  "290654-926B",
  "200472-956J",
  "110593-940E",
  "010555-9063",
  "140533-9452",
  "020487-926U",
  "200104-987K",
  "150481-9769",
  "100931-962R",
  "210756-905U",
  "040447-989U",
  "200110-973N",
  "240349-996N",
  "100806-977Y",
  "061083-938L",
  "050171-918Y",
  "150785-972L",
  "061018-996P",
  "130807-934S",
  "251136-995C",
  "190484-9261",
  "080213-998A",
  "291092-987B",
  "270978-9670",
  "040612-901K",
  "040550-999R",
  "240372-9559",
  "191162-9005",
  "020719-9073",
  "150820-9564",
  "020166-920T",
  "160382-912A",
  "240122-9066",
  "060234-938H",
  "080276-960B",
  "280606-9248",
  "271192-928Y",
  "040243-9531",
  "240653-9709",
  "261012-946E",
  "040688-974J",
  "090906-925E",
  "140359-962P",
  "230292-915P",
  "231177-993L",
  "230596-952B",
  "250865-9599",
  "011018-9810",
  "021022-9910",
  "060185-958H",
  "280193-986N",
  "110895-940C",
  "101146-909H",
  "240505-9747",
  "180211-9069",
  "171178-973B",
  "280344-961U",
  "260975-9822",
  "020676-9712",
  "180721-907X",
  "050313-917K",
  "240591-927W",
  "160216-908B",
  "270176-981F",
  "020619-959Y",
  "270136-9804",
  "110471-901P",
  "240134-9988",
  "281150-9106",
  "271168-980E",
  "250839-991L",
  "290362-917P",
  "130608-914S",
  "250908-998M",
  "160485-992F",
  "170708-9400",
  "060250-974T",
  "280680-989E",
  "050118-9134",
  "260634-963E",
  "250171-997D",
  "260240-966V",
  "270822-9152",
  "270432-979F",
  "011018-907L",
  "100267-967J",
  "060839-909P",
  "140452-992N",
  "170713-922P",
  "290304-9604",
  "170759-9748",
  "200167-916J",
  "090972-999V",
  "150512-9127",
  "120936-943P",
  "280387-976D",
  "100308-961X",
  "170261-968J",
  "240833-934K",
  "250315-938N",
  "250882-932T",
  "060314-9429",
  "210290-9545",
  "060611-987C",
  "271050-935J",
  "030105-990Y",
  "230548-999F",
  "150570-949C",
  "141119-9371",
  "261175-980L",
  "220128-969F",
  "100953-9822",
  "040216-937J",
  "080596-960X",
  "151169-997H",
  "210512-955F",
  "090215-9907",
  "150884-991S",
  "290188-918U",
  "090984-963T",
  "280811-980Y",
  "010735-9853",
  "060297-9206",
  "290922-930M",
  "131098-959N",
  "190150-919L",
  "230251-9198",
  "070329-9845",
  "040801-939K",
  "301065-910J",
  "030953-954M",
  "280356-990V",
  "161123-984V",
  "200480-9381",
  "220733-9832",
  "120959-950V",
  "290137-9014",
  "100197-966E",
  "190436-984H",
  "250215-997S",
  "050336-924R",
  "210265-917H",
  "101003-9896",
  "050114-964R",
  "211112-965M",
  "101147-932H",
  "081067-988C",
  "181008-960P",
  "200383-998X",
  "190149-984E",
  "230145-947T",
  "020670-974L",
  "090926-998Y",
  "190720-9014",
  "020546-9627",
  "250413-984E",
  "250461-9912",
  "220224-9034",
  "271029-912C",
  "121189-9120",
  "130546-970K",
  "091181-924C",
  "280886-921D",
  "201131-9779",
  "120912-972E",
  "240727-9325",
  "281195-961E",
  "121087-9928",
  "290903-966W",
  "301001-903T",
  "030416-944R",
  "091174-9447",
  "010348-994H",
  "290827-912J",
  "230638-958C",
  "110945-9033",
  "240723-9999",
  "241052-911B",
  "190743-940A",
  "150907-919C",
  "211182-9784",
  "210663-956F",
  "260767-9080",
  "250551-906J",
  "131113-906U",
  "111087-941Y",
  "090429-9140",
  "291042-9143",
  "040295-9456",
  "280938-9669",
  "291106-9592",
  "180678-9197",
  "230215-943R",
  "170454-9603",
  "110638-955J",
  "140966-9587",
  "291127-9816",
  "080477-919W",
  "050327-922B",
  "010452-901B",
  "110276-9510",
  "190747-9921",
  "280125-9299",
  "170327-931C",
  "240140-967T",
  "040419-931R",
  "280959-937S",
  "060767-9758",
  "240877-9991",
  "270401-920K",
  "220920-991K",
  "010512-988M",
  "130615-984U",
  "100188-954R",
  "260153-9840",
  "010446-9745",
  "040595-924X",
  "230164-923X",
  "030785-990E",
  "190396-958B",
  "010145-970B",
  "061139-958P",
  "170536-934D",
  "140586-933B",
  "200465-928U",
  "011161-971K",
  "020893-994T",
  "200516-925W",
  "111012-949V",
  "220148-9567",
  "220957-914M",
  "110423-9906",
  "181159-931R",
  "180443-9995",
  "090962-985U",
  "171124-928Y",
  "160310-913S",
  "141180-941W",
  "130124-915W",
  "230373-926Y",
  "090554-958N",
  "040667-964T",
  "040995-908M",
  "150542-902M",
  "241096-9897",
  "020447-932P",
  "250395-9645",
  "291157-9287",
  "230920-9939",
  "141119-921H",
  "100972-907J",
  "100770-955Y",
  "200538-932T",
  "051134-959T",
  "280515-914E",
  "180198-949A",
  "271020-9155",
  "031190-988W",
  "080897-964R",
  "110287-974K",
  "040958-9371",
  "061056-967K",
  "100124-957A",
  "140727-982A",
  "081049-9727",
  "250244-972E",
  "220823-902N",
  "090884-9364",
  "160926-917V",
  "010439-9984",
  "040908-945C",
  "190780-906S",
  "221181-9409",
  "030419-9302",
  "180393-915J",
  "290437-999P",
  "150248-994R",
  "190675-946Y",
  "140278-9779",
  "220183-904K",
  "250302-9955",
  "050292-992K",
  "080780-904L",
  "080590-995H",
  "100873-979A",
  "240924-9353",
  "040729-957K",
  "150454-933X",
  "210482-9109",
  "211070-923E",
  "240991-9573",
  "031029-907R",
  "280453-947H",
  "280625-931C",
  "211059-951H",
  "150158-960D",
  "030202-907A",
  "060974-9883",
  "070351-950R",
  "050543-946V",
  "131036-904W",
  "070135-936J",
  "160562-996F",
  "280348-9694",
  "070341-959E",
  "060807-9570",
  "021015-9019",
  "220896-9568",
  "260739-914Y",
  "180853-987K",
  "200677-953B",
  "010883-908T",
  "051078-958A",
  "110458-979V",
  "280688-993M",
  "250527-9027",
  "200122-9833",
  "090364-964U",
  "270888-9773",
  "020581-9307",
  "010474-982M",
  "230678-919E",
  "221074-9876",
  "280397-926C",
  "220188-932S",
  "020811-929J",
  "290494-908F",
  "280135-957S",
  "150550-9763",
  "041107-905E",
  "030656-9606",
  "040844-9556",
  "200556-9268",
  "241071-9971",
  "170439-941L",
  "060716-963P",
  "290608-9741",
  "130326-902L",
  "141176-903M",
  "280928-9174",
  "130314-931E",
  "211111-9541",
  "290576-9201",
  "180584-9831",
  "160570-967L",
  "241034-913S",
  "280706-9917",
  "240274-954Y",
  "100772-957J",
  "201150-908Y",
  "030345-972A",
  "220846-9527",
  "100297-918P",
  "270683-9189",
  "250731-9381",
  "210215-988W",
  "090332-9216",
  "140631-964Y",
  "120521-923Y",
  "110358-972U",
  "260136-913A",
  "240509-991T",
  "171157-970U",
  "011076-992A",
  "180122-974H",
  "190305-9055",
  "060941-967W",
  "270420-997Y",
  "110938-945M",
  "251050-914K",
  "170362-941R",
  "190664-961L",
  "210902-933D",
  "050893-997U",
  "251184-9156",
  "070874-926X",
  "040584-964C",
  "170396-943K",
  "090954-980L",
  "110105-907E",
  "270856-944S",
  "210445-994E",
  "270344-907E",
  "270838-991M",
  "050250-9690",
  "090806-9149",
  "050465-949U",
  "160636-910T",
  "040606-990W",
  "261053-903M",
  "270212-9968",
  "120692-9587",
  "200131-9412",
  "070203-9020",
  "140225-986W",
  "040155-9518",
  "220997-973V",
  "020568-9749",
  "170284-9297",
  "241063-979C",
  "250745-9822",
  "220823-935R",
  "250536-930E",
  "200454-917M",
  "160124-961A",
  "190694-997H",
  "150376-964T",
  "091117-956W",
  "250834-9201",
  "080446-9264",
  "080351-999Y",
  "160276-967R",
  "240132-9528",
  "021174-980V",
  "160105-941S",
  "060303-9689",
  "060367-925D",
  "300177-973D",
  "160547-976Y",
  "151074-990S",
  "160356-9262",
  "060804-9865",
  "171110-9856",
  "031006-902M",
  "091103-946Y",
  "020631-982T",
  "130910-9562",
  "190943-968U",
  "281092-9041",
  "141062-9281",
  "130971-961Y",
  "141107-961P",
  "270819-959P",
  "140649-927D",
  "200340-9144",
  "110195-907N",
  "130111-9046",
  "210443-946C",
  "170479-9529",
  "221136-910P",
  "290539-9459",
  "010256-921D",
  "160706-990E",
  "240314-906R",
  "010904-954P",
  "260886-994F",
  "290481-993V",
  "010265-943E",
  "050419-930B",
  "150988-9498",
  "180329-9527",
  "280580-999Y",
  "050363-978E",
  "210706-959N",
  "040368-973X",
  "260767-957K",
  "270239-9923",
  "210827-979J",
  "070370-951N",
  "140239-954F",
  "140130-957E",
  "280158-926P",
  "070727-9271",
  "230471-9512",
  "131131-966D",
  "130118-962V",
  "130217-916X",
  "210881-9119",
  "030906-9136",
  "281147-978L",
  "240486-9341",
  "040863-9874",
  "220897-905V",
  "020216-950N",
  "290757-9335",
  "111020-9266",
  "280146-9789",
  "170481-969B",
  "010792-9356",
  "040104-9524",
  "231188-961D",
  "070554-996L",
  "270435-9178",
  "080919-912R",
  "070649-954S",
  "010721-9733",
  "100963-9077",
  "020480-9648",
  "010185-906L",
  "210875-968K",
  "270987-937B",
  "090830-915H",
  "010573-968R",
  "091135-9445",
  "140856-961X",
  "120645-997B",
  "081156-995K",
  "141031-920S",
  "221162-9003",
  "090126-917W",
  "100533-921P",
  "110419-912M",
  "250438-936B",
  "120274-900F",
  "290611-934H",
  "251151-9615",
  "040326-9146",
  "280737-982X",
  "080615-9971",
  "100224-949V",
  "170723-911X",
  "070594-9714",
  "250656-900E",
  "180319-990V",
  "030385-975R",
  "250413-962R",
  "180712-964E",
  "270809-9007",
  "300561-977M",
  "210809-995D",
  "050726-937T",
  "200646-968U",
  "030732-945A",
  "221088-954R",
  "140417-996S",
  "140313-9083",
  "230722-906C",
  "110577-9997",
  "131144-9143",
  "200415-918L",
  "231150-952A",
  "270228-965C",
  "170145-972R",
  "271023-971R"
]

const main = async () => {
  console.log("processing " + process.argv[2])

  const source = JSON.parse(fs.readFileSync(process.argv[2]))

  const result = source.value.map((u, i) => {
    console.log(i, u)
    u.ssn = tempSSNs[i]
    return u
  })

  console.log("result", result)

  fs.writeFileSync(
    "output.json",
    JSON.stringify({
      "@odata.context": "https://api.az-sympa.com/api/$metadata#DemoAava",
      value: result
    })
  )
}

main().catch(err => console.log(err))
